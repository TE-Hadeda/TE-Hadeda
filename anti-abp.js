! function() {
    function f() {
        var a = document.createElement("div");
        a.id = "adblock_abdoutech";
        a.innerHTML = '<div class="inner"> <div class="header"> <h2>تم الكشف عن مانع الإعلانات :(</h2> </div> <div class="isi"> <p>من فضلك قم بتعطيل أداة مانع الأعلانات أدبلوك AdBlock من المتصفح للدخول للمدونة، أو أستخدم متصفح أخر وشكرا لك :)</p> <div class="tombol"><button class="1 active">اد بلوك</button><button class="2">اد بلوك بلس</button></div> <div class="tutorial"> <div class="1 active"> <ol> <li>انقر على رمز أدبلوك في المتصفح<br><img src="https://s1.gulfupload.com/i/00063/azoulz3ja974.png" alt="اد بلوك"></li> <li>اختر, Don\'t run on pages on this domain<br><img src="https://s1.gulfupload.com/i/00063/9ae2a1jw5urh.png" alt="اد بلوك" width="300px"></li> <li>سوف تظهر نافذة جديدة. اضغط على "Exclude" button<br><img src="https://s1.gulfupload.com/i/00038/6anrfw2wcu3j.jpg" alt="اد بلوك"></li> <li>يجب أن يتحول رمز المتصفح إلى اللون الرمادي<br><img src="https://s1.gulfupload.com/i/00063/3e8ldjganbjk.png" alt="اد بلوك"></li> <li>حدث الصفحة إذا لم يتم تحديثها تلقائيا. شكر!</li> </ol> </div> <div class="2"> <ol> <li>انقر على أيقونة أدبلوك بلوس في متصفحك<br><img src="https://s1.gulfupload.com/i/00063/yjniblbmjjgi.png" alt="اد بلوك"></li> <li>انقر على "Enabled on this site"<br><img src="https://s1.gulfupload.com/i/00063/r6s5fqdf51u8.png" alt="اد بلوك" width="250px"></li> <li>بمجرد النقر عليها، يجب أن تتغير إلى"Disabled on this site"<br><img src="https://s1.gulfupload.com/i/00063/9uczsbpmk5g4.png" alt="اد بلوك" width="250px"></li> <li>يجب أن يتحول رمز المتصفح إلى اللون الرمادي<br><img src="https://s1.gulfupload.com/i/00063/nicknrmig5ha.png" alt="اد بلوك"></li> <li>حدث الصفحة إذا لم يتم تحديثها تلقائيا. شكر!</li> </ol> </div> </div> </div> </div>';
        document.body.append(a);
        document.body.style.overflow = "hidden";
        var b = a.querySelectorAll("button");
        a.querySelector(".close");
        var d = a.querySelectorAll(".tutorial > div");
        for (a = 0; a < b.length; a++) b[a].addEventListener("click", function(a) {
            a.preventDefault();
            a = this.getAttribute("class").split(" ")[0];
            for (var c = 0; c < d.length; c++) d[c].classList.remove("active"), b[c].classList.remove("active");
            b[a - 1].classList.add("active");
            d[a - 1].classList.add("active")
        })
    }
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = !0;
    b.src = "";
    b.onerror = function() {
        f();
        window.adblock = !0
    };
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(b, e)
}();
