export function calculatePriority(task){
 const w={low:1,medium:2,high:3};
 const i=w[task.importance];
 const days=3;
 const deadlineScore=Math.max(0,7-days);
 return i*2+deadlineScore;
}