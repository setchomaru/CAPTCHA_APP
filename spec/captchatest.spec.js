function captchaapp(p, o, l, r){
    this.generate = function() {
			return new LOperator(p,l)+ ' '+ new Operator(o) + ' ' + new ROperator(p,r);
    }
  }
var op = ['+', '-','*','/'];
function Operator(o){
  this.toString = function(){
    return op[o-1];
	}
}


function LOperator(pattern,left)
{
	var tran= ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];
	var number =['0','1','2','3','4','5','6','7','8','9'];
   this.toString = function(){
     if (pattern=== 1) {
           return number[left];
     }
     else if(pattern===2)
     {
           return tran[left];
    }
   }
}

function ROperator(pattern,right)
{
	var tran1= ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];
	var number1 =['0','1','2','3','4','5','6','7','8','9'];
   this.toString = function(){
     if (pattern=== 1) {
           return tran1[right];
     }
     else if(pattern===2)
     {
           return number1[right];
     }
   }
}


describe('Captcha App', () =>{
 describe('Pattern 1', () =>{
    let pattern = 1
    it('should return "1 + ONE" when in input is 1, 1, 1, 1',  () => {
			var app = new captchaapp(pattern,1,1,1)
      expect(app.generate()).toEqual('1 + ONE')
    })
    it('should return "2 + FIVE" when in input is 1, 1, 2, 5',  () => {
			var app = new captchaapp(pattern,1,2,5)
      expect(app.generate()).toEqual('2 + FIVE')
    })

    it('should return "0 + ZERO" when in input is 1, 1, 0, 0',  () => {
			var app = new captchaapp(pattern,1,0,0)
      expect(app.generate()).toEqual('0 + ZERO')
    })

    it('should return "2 - ZERO" when in input is 1, 2, 2, 0',  () => {
      var app = new captchaapp(pattern,2,2,0)
      expect(app.generate()).toEqual('2 - ZERO')
    })


        it('should return "6 + ZERO" when in input is 1, 1, 6, 0',  () => {
          var app = new captchaapp(pattern,1,6,0)
          expect(app.generate()).toEqual('6 + ZERO')
        })
        it('should return "1 - ZERO" when in input is 1, 2, 1, 0',  () => {
          var app = new captchaapp(pattern,2,1,0)
          expect(app.generate()).toEqual('1 - ZERO')
        })


        it('should return "9 + ZERO" when in input is 1, 1, 9, 0',  () => {
          var app = new captchaapp(pattern,1,9,0)
          expect(app.generate()).toEqual('9 + ZERO')
        })
  })





  describe('Pattern 2', () =>{
     let pattern = 2
     it('should return "SIX + 0" when in input is 2, 1, 6, 0',  () => {
 			var app = new captchaapp(pattern,1,6,0)
       expect(app.generate()).toEqual('SIX + 0')
     })
     it('should return "FIVE + 3" when in input is 2, 1, 5, 3',  () => {
       var app = new captchaapp(pattern,1,5,3)
       expect(app.generate()).toEqual('FIVE + 3')
     })



   })
})

//pattern2
