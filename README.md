# PLA-Screw-Cap-Design-Software
I iteratively modeled, 3d printed, and tested different screw caps out of PLA until I found the right fit. Then I modeled a formula to consistently give me the right fit, a formula I derived from my testing. 

The formula is essentially: (inital accepatable tolerance for 1 degree ) x (grow rate (GR) of degree 2) x (GR of degree 3) x (GR of degree 4)... and so on, until you reach the degree your using for your helix configured screw cap. 

Greater degrees mean screw ridges that extend out wider. From there, I automated the calculations for my application with client side javascript. I then implemented an o-ring to give me a water-tight fit. This is part of a much larger ongoing project. Below is a picture of the final working result of this one:

![screw cao image](https://github.com/thomas-c-webdev/PLA-Screw-Cap-Design-Software/blob/main/PLA-water-cap-seal.png)
