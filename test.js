var Body = {
    setColor : function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color)
    },

    setBackgroundColor : function (color){
//    document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color)
    }
  }
  
  var Links = {
    setColor : function (color){
    //   var alist = document.querySelectorAll('a')
    //   var i = 0
    
    //   while(i < alist.length){
    //     console.log(alist[i]);
    //     alist[i].style.color = color;
    //     i += 1;
    //   }
    $('a').css('color',color);
        }
    }
  // function LinksSetColor(color){
  // }

  // function BodySetColor(color){
  // }

  // function BodySetBackgroundColor(color){
  // }

  function nightday_handler(self){
 
    if(self.value === 'night'){
      Body.setBackgroundColor('black')
      Body.setColor('White')
      self.value = 'day'
      Links.setColor('powderblue')
    }

    else{
      Body.setBackgroundColor('white')
      Body.setColor('black')
      self.value = 'night'
      Links.setColor('blue')
    }
  }