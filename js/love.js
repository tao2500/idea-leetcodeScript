let beauty0={name:'微风',time:'春',importance:1}, beauty1={name:'细雨',time:'夏',importance:1}, beauty2={name:'明月',time:'秋',importance:1}, beauty3={name:'飞雪',time:'冬',importance:1}, beauty4={name:'章鱼小丸子',importance:2}, beauty5={name:'松松软软小蛋糕',importance:2}, allBeautifulThing={name:'所有美好',importance:1}, you={name:'你',time:'永远',importance:Number.MAX_SAFE_INTEGER},
  i=[],
  world=[beauty0,beauty1,beauty2,beauty3,beauty4,beauty5,allBeautifulThing,you];
console.log(i.sort.call(world,(a,b)=>{ return b.importance-a.importance;}))
