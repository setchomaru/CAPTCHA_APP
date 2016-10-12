describe('captcha app', () =>{
  describe('Pattern 1', () =>{
    it('should return "2 + Five" when in input is 1,1,2,5', () =>{
      expect(app.generate().toEqual('2 + Five'))
    })
  })
})
