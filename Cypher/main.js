// Write class below
//console.log('A'.charCodeAt(0))
//let test = String.fromCharCode(65, 66, 67, 68);
//console.log(test)

class ShiftCipher{
    constructor (shift){
      this._shift=shift
    }
  
    get shift (){
      return this._shift
    }
  
    encrypt (string){
        string = string.toUpperCase() 
      let unicodeArray = []
      let unicodeArrayShift=[]
     for (let i=0;i<string.length; i++){
        unicodeArray.push(string.charCodeAt(i))
      }

      for (let x=0;x<unicodeArray.length; x++){
        if (unicodeArray[x]<65||unicodeArray[x]>90){
            unicodeArrayShift.push(unicodeArray[x])
        }else{
            if (unicodeArray[x]+this.shift>90){
                unicodeArrayShift.push(unicodeArray[x]+this.shift-26)
            }else{
                unicodeArrayShift.push(unicodeArray[x]+this.shift)
            }
            
        }
      }
      //console.log(unicodeArray)
      //console.log(unicodeArrayShift)
      let encryptedString = String.fromCharCode.apply(null,unicodeArrayShift);
      return encryptedString;

  }

  decrypt (string){
    string = string.toUpperCase() 
  let unicodeArray = []
  let unicodeArrayShift=[]
 for (let i=0;i<string.length; i++){
    unicodeArray.push(string.charCodeAt(i))
  }

  for (let x=0;x<unicodeArray.length; x++){
    if (unicodeArray[x]<65||unicodeArray[x]>90){
        unicodeArrayShift.push(unicodeArray[x])
    }else{
        if (unicodeArray[x]-this.shift<65){
            unicodeArrayShift.push(unicodeArray[x]-this.shift+26)
        }else{
            unicodeArrayShift.push(unicodeArray[x]-this.shift)
        }
        
    }
  }
  //console.log(unicodeArray)
  //console.log(unicodeArrayShift)
  let encryptedString = String.fromCharCode.apply(null,unicodeArrayShift);
  return encryptedString.toLowerCase();

}
  }



  
  