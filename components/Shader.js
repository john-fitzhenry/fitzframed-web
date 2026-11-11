"use client";
import { useEffect, useRef } from "react";

// A slow, warm "light leak" drawn with a WebGL fragment shader behind dark sections.
// It only runs while on screen, renders at reduced resolution, and draws a single
// still frame when the visitor prefers reduced motion.
const FRAG = `
precision mediump float;
uniform vec2 r; uniform float t; uniform vec2 m;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p=p*2.02+vec2(1.7,9.2);a*=.5;}return v;}
void main(){
  vec2 uv=gl_FragCoord.xy/r;
  vec2 p=uv*vec2(r.x/r.y,1.)*1.5;
  float q=fbm(p+vec2(t*.05,-t*.03));
  float w=fbm(p*1.3+q*1.9+vec2(-t*.04,t*.06)+m*.35);
  vec3 base=vec3(.078,.067,.055);
  vec3 warm=vec3(.91,.35,.05);
  vec3 gold=vec3(1.,.72,.38);
  float fall=smoothstep(1.25,.05,distance(uv,vec2(.82,.78)+m*.1));
  float leak=smoothstep(.42,.9,w)*fall;
  vec3 c=base+warm*leak*.5+gold*pow(leak,3.)*.3;
  c+=(h(gl_FragCoord.xy+fract(t)*91.)-.5)*.03;
  gl_FragColor=vec4(c,1.);
}`;
const VERT = "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";

export default function Shader() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) return;
    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const a = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(a);
    gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);
    const uR = gl.getUniformLocation(prog, "r");
    const uT = gl.getUniformLocation(prog, "t");
    const uM = gl.getUniformLocation(prog, "m");

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = [0, 0];
    const target = [0, 0];
    let raf = 0;
    let visible = false;

    const resize = () => {
      const scale = 0.5; // half resolution is plenty for a soft gradient
      const w = Math.max(1, Math.floor(canvas.clientWidth * scale));
      const h = Math.max(1, Math.floor(canvas.clientHeight * scale));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };
    const draw = (now) => {
      resize();
      mouse[0] += (target[0] - mouse[0]) * 0.04;
      mouse[1] += (target[1] - mouse[1]) * 0.04;
      gl.uniform2f(uR, canvas.width, canvas.height);
      gl.uniform1f(uT, reduce ? 12 : now / 1000);
      gl.uniform2f(uM, mouse[0], mouse[1]);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (visible && !reduce) raf = requestAnimationFrame(draw);
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(draw);
    });
    io.observe(canvas);
    const onMove = (e) => {
      const b = canvas.getBoundingClientRect();
      target[0] = ((e.clientX - b.left) / b.width) * 2 - 1;
      target[1] = -(((e.clientY - b.top) / b.height) * 2 - 1);
    };
    const host = canvas.parentElement;
    host.addEventListener("pointermove", onMove);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      host.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="shader" aria-hidden="true" />;
}
