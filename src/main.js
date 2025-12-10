import './index.css'

function prepare(){
  document.querySelectorAll('[data-animate="fade-in-up"]').forEach(el=>{
    el.classList.add('pre-animate')
  })
  document.querySelectorAll('[data-stagger="children"]').forEach(container=>{
    Array.from(container.children).forEach(child=>child.classList.add('pre-animate'))
  })
}

function runStagger(container){
  const children=Array.from(container.children)
  const baseDelay=parseFloat(container.dataset.delay||'0.08')
  const step=parseFloat(container.dataset.staggerStep||'0.12')
  children.forEach((child,i)=>{
    const d=baseDelay+step*i
    child.style.animationDelay=`${d}s`
    child.classList.add('animate-fade-in-up')
  })
}

function setup(){
  const io=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const el=entry.target
        if(el.dataset.stagger==='children'){
          runStagger(el)
        }else{
          el.classList.add('animate-fade-in-up')
        }
        io.unobserve(el)
      }
    })
  },{threshold:0.4})
  document.querySelectorAll('[data-animate="fade-in-up"], [data-stagger="children"]').forEach(el=>io.observe(el))
}

document.addEventListener('DOMContentLoaded',()=>{
  prepare()
  setup()
})
