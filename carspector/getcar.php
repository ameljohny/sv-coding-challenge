<?php 
include('Simplehtmldom/simple_html_dom.php');



    $bd=$_POST['bd'];
    $mu=$_POST['mu'];
    $upr=$_POST['upr'];
    $pr=$_POST['pr'];

/*
*Why reinvent the wheel? 
*We found carwale is doing a great job, 
*so we scrapped their site to show the suggestions, a small jugaad.
*Was it a Cake walk?
*Maybe after learning their code and realizing they use another url to get the result.
*Or may be because we are good  at scrapping? 
*/

    $url="http://www.carwale.com/newcars/recommendcars/result.aspx?bd=".$bd."&mu=".$mu."&upr=".$upr."&pr=".$pr;
$html = file_get_html($url);




foreach($html->find('li') as $element) {

    $img=$element->getElementsByTagName('img') ; 
    $img= $img[0]->getAttribute('src');
    $h2=$element->getElementsByTagName('h2') ;
    $a=$h2[0]->getElementsByTagName('a') ;
    $a= $a[0]->innertext;
    $price = $element->find('span[class=text-bold]'); 
    $price= $price[0];
    $spec = $element->find('p[class=margin-top15 font12 text-light-grey]'); 
    $spec= $spec[0];


    echo "<div class=\"col-md-3 col-sm-6 col-xs-12 wow fadeIn\" data-wow-offset=\"50\" data-wow-delay=\"0.1s\">
                        <div class=\"results-thumb\">
                           <img src=\"".$img."\" class=\"img-responsive\" alt=\"results img 1\">
                                <div class=\"results-overlay CodeNewRomanBold\">
                                    <h4>".$a."</h4>
                                     <div class=\"rate-holder\"><p class=\"rate\">₹".$price."</p></div>
                                    <p>".$spec."</p>
                                    
                                </div>
                        </div>
                    </div>";
	
	
}


	



  

  
       	
          
 ?>
