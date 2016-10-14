
var tran= ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
var number =[0,1,2,3,4,5,6,7,8,9];

function captchaapp(p, o, l, r){
    this.generate = function() {
  return new LOperator(p,l) + ' ' + new Operator(o) + ' ' +  new ROperator(p,r)
    }

}
function Operator(o)
{
  this.toString = function(){
    if(o === 1)
    {

  return '+';

    }
    if (o ===2){

  return '-';
    }
  }

}


function LOperator(p,l)
{

   this.toString = function(){
     if (p=== 1) {
       for(var i=0;i<10;i++){
         if(l===i){
           return number[l];
         }
       }
     }  //if
     else if(p===2)
     {
       for(var i=0;i<10;i++){
         if(l===i){
           return tran[l];
         }
       }
     }
   }
}

function ROperator(p,r)
{

   this.toString = function(){
     if (p=== 1) {
       for(var i=0;i<10;i++){
         if(i===r){
           return tran[r];
         }
       }
     }
     else if(p===2)
     {
       for(var i=0;i<10;i++){
         if(i===r){
           return number[r];
         }
       }
     }
   }
}


describe('captchaapp', () =>{
  describe('Pattern 1', () =>{

    it('should return "0 + ZERO" when in input is 1, 1, 0, 0', () =>{
      expect(captchaapp(1, 1, 0, 0).toEqual('0 + ZERO'))
    })
  })
});
