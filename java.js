console.log("java loaded successfully");


function testfunction(){
 //document.getElementsByClassName('skillbox').style.backgroundColor = "red";
 console.log("hovertest");
 //var testvar =  document.getElementsByClassName('skillbox');
 //console.log(testvar);
 //document.getElementsByClassName('skillbox').className.replace = "skillboxtest"; 
 $("testid").attr('skillbox', 'skillboxtest');
}
$(document).ready(function(){
    $("#btn1").click(function(){
      alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function(){
      alert("HTML: " + $("#test").html());
    });
  });


var initalID = ''; 
function flexid(idd){
    $(document).ready(function(){
        $(idd).on({
            mouseenter: function () {
                //alert("its working");  
                //$(idd).addClass("skillboxtest");
                //$(idd).removeClass("skillbox");
                $(idd).addClass("growwer");
            },
        
            mouseleave: function () {
               // alert("its done working"); 
                //$(idd).addClass("skillbox");
                //$(idd).removeClass("skillboxtest");
                $(idd).removeClass("growwer");
    
            }
        });
      });
    
}

flexid("#testid");
flexid("#testid2");
flexid("#testid3");
/*flexid("#work2");
flexid("#work3");
flexid("#work4");*/


function workgrow(workid){
$(document).ready(function(){
    $(workid).on({
        mouseenter: function () {
            //alert("its working");  
          // $("#work1").addClass("workGrid2");
            //$("#work1").removeClass("workGrid");
            $(workid).addClass("growwer2");
        },
    
        mouseleave: function () {
           // alert("its done working"); 
         //  $("#work1").addClass("workGrid");
           // $("#work1").removeClass("workGrid2");
            $(workid).removeClass("growwer2");

        }
    });
  });

}

workgrow ("#work1");
workgrow ("#work2");
workgrow ("#work3");
workgrow ("#work4");


 /* $(document).ready(function(){
    $("#testid").on({
        mouseenter: function () {
            //alert("its working");  
            $("#testid").addClass("skillboxtest");
            $("#testid").removeClass("skillbox");
            $('#testid').addClass("growwer");
        },
    
        mouseleave: function () {
           // alert("its done working"); 
            $("#testid").addClass("skillbox");
            $("#testid").removeClass("skillboxtest");
            $('#testid').removeClass("growwer");

        }
    });
  });
  */

