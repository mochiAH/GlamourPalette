
        document.addEventListener('DOMContentLoaded', function() {
            let slideIndex = 0;
            let timeout;

            showSlides();

            function plusSlides(n) {
                clearTimeout(timeout);
                showSlides(slideIndex += n);
            }

            function showSlides() {
                let i;
                let slides = document.getElementsByClassName("mySlides");

                if (slideIndex >= slides.length) {
                    slideIndex = 0;
                }

                if (slideIndex < 0) {
                    slideIndex = slides.length - 1;
                }

                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }

                slides[slideIndex].style.display = "block";

                let dynamicText = document.getElementById("dynamicText");
                let dynamicSubText = document.getElementById("dynamicSubText");
                let dynamicParagraph = document.getElementById("dynamicParagraph");

                if (slideIndex % 3 === 0) {
                    dynamicText.textContent = "Class Outfit";
                    dynamicSubText.textContent = "Adhere to any dress code regulations set by your school or universities. To ensure that you feel comfortable all the time when you are at school or universities, we would suggest you wear smart casual outfit or casual comfort outfit for both man and woman. As for footwear, we suggest to wear sneakers and flat shoes. To make sure that your outfit look put together wear footwear either in black or neutral colours such as white, off-white or beige colour. But if you ever feel like want to wear footwear other than colours that we suggested you are free to wear it to put personalities on your outfit.";
                    dynamicParagraph.textContent = "Tips and tricks on how to dress up appropriately for our daily lives and important occasions.";
                } else if (slideIndex % 3 === 1) {
                    dynamicText.textContent = "Office Outfit";
                    dynamicSubText.textContent = "Know your company's dress code policy and follow it. To make yourself look polish and professional, we suggest you to wear polo and dress shirt plus style it with blazer for men. As for women, we suggest you to wear straight pants or pencil skirt and pair it up with blouse or fitted top. As for footwear, for men we suggest you to invest in loafers as it will make you look very professional. As for women, flat shoes, low-heels and comfortable sandals are the perfect footwear for work. Not to forget, you can also wear accessories such as watch and jewelleries to look more fashionable. ";
                    dynamicParagraph.textContent = "Explore the latest fashion trends and elevate your style with GlamourPalette.";
                } else {
                    dynamicText.textContent = "Wedding Outfit";
                    dynamicSubText.textContent = "Follow the specified dress code on the wedding invitation and remember to consider the wedding venue, theme, and dress code when choosing your outfit. As for men, we suggest that you can wear a polo shirt or batik shirt and pair up with black pants. You can also wear a full set of baju melayu when attending weddings. For footwear, wear loafer, sneakers or sandal as in capal. For women, you can wear abaya, jubah, baju kurung and long dress for this occasion. As for footwear, wear heels or flat shoes. As for the accessories, watch, jewelleries and handbag are the best option for women and as for the men, watch and sunglasses our suggestion for accessories";
                    dynamicParagraph.textContent = "Discover the art of mixing and matching outfits to create unique and stylish looks.";
                }

                timeout = setTimeout(showSlides, 5000);
            }

            document.querySelector(".prev").addEventListener("click", function() {
                plusSlides(-1);
            });

            document.querySelector(".next").addEventListener("click", function() {
                plusSlides(1);
            });
        });