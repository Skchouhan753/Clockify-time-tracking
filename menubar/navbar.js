function navbar(){
    return ` <div class="sidebar">
       
    <nav id="navbar">
        <div>
            <!-- <input type="checkbox" id="openSideBarMenu">
            <label for="openSideBarMenu" class="sideBarIconToggle"></label> -->
            <button id="navbtn" onclick="openMenu()"><img id="navimg" src="https://cdn-icons-png.flaticon.com/128/8212/8212733.png" alt=""></button>
            <img id="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcUAAABvCAMAAACq7yuKAAAAsVBMVEX///8DqfQAp/QiIiIApPMAo/PP7v1zyfgAq/T1+/7n9f7y+f4AovNcwPcAAAC14/s9ufaW1vri8f1yxvgdHR3r+P6n3fvY8P0QEBCGz/mv3/v6+vrU1NQisPVewffe8/14eHiR1PnI6fwvs/Wp2PqCzfnb29tNu/aAgICVlZUAnfPO7v1QUFAWFhbC5vyHh4fHx8dYWFhHR0fv7++6urplZWUoKCifn5+vr69eXl5LwPcH5tsgAAARPElEQVR4nO1daZviOA4ujAMJZzLcVAUGUnS2p6fZ6jl35///sCWEQ5IvBZKu6iXvh3mmKXAcv5YsybL89FTjXrR2ScNPognv28F2+brYbV6Hs2p7VQoCiPfujAlldLKbeqJxgJQb95c7UehJKQ6Q0hOr4YcdmRNGvSt++fLevTEghZ3s3tRENz5ymMEbOb67HknZABBeHH1sHtvi2luv9d69MaAPOilvYzGFTUS2bwaLBvju+Sfx8qbHFkawnm2nm80mmi63szX3Vw/C4tRDnHTM3+yESA6vg9NnLqi3I9hu0tg/KHGZafLDf/04Xew5VD4IizGWrIXxizNfFcQcwt/f/AIMdJapfyCOPlTIRjh1EvkYLE56eHAS0xfXJg6zEW1YRPhObPsqg5fnShk69DlkUf7fsvjFIyNj+F7XN5PYkLt73sGGYeJZZs+RyIZ1LX8MWaQsCsP3Qttg+hXZqfuEzjHtHGoMzU08BosdolFj/dcivWFzevD0rncwoZXaHnqFCC0v/hgsPmFNKfS6cUL1aW4unv5hXEvvQbATdl16JdGmCR6ERSxlUh9VW2CpkPFqM50u0nycKxmcdcITxAOJ1nYehEXkakh98CbA7kjjHK+ZjQ6PF6tbO2/BUBNfuIXEh2Fxdm1CJHrltMdyAQajFQtRgc9vXYZNJH769Vlt6VFYPLjz+ZiJXmpYYUZQMHpb+KdJzAihF0XbTGIWhzeQOJhraHwMf/GIKPak9EKTwR4kcBjb+I8VSGJfS6I4OP9xmPbTMMn+P3txkV5/9Gkwbs5/U2h8GFnMMJnNzJZeF46qV12Y5oSRhkTRSNr7q+W13i9CX0pI4nzcbDbnv/5OGnsoFq1oAd/bZU3cj53q6ct4odrOk+nqOvFexhmJBxp/IzTWLJ6xBMIhzOHycrBRSJTJ1BUbemnmJDabg8/4LzWLZ0wBixXFaS7YUhJlbImvnQBI/JmsjDWLZ0C7X1a7J9ylguht3DHal69XEunfahbPQCy6JeMepNjZF42t+zcvczOJNYsXfD8Wp9g8FQnDj8lcDCOJj+QvOvDdWJxgbWqPc5/wYiWxlsULvhuLKEbUEH3GTxwk3sBiMJsuVkkS+3GSpLtof8eoButhNAqPTYXpajE1+eQ8FgOMrvmPut89beBDlqQx3RNYb6j+YoZJNMUDIWyGzREFWfwp6vvedc8ty9USyW57yy54J0p977p/l2Xwev5IOylYLO4aPkQD76qOwF9xClxHnn8B4GOI3PNI0eeMdwxi2KN/jp+tIIumyDzC2dk/kPgv/TeKsNidJtocH+HFbXbq5On1hqnQNiXjkdoLDosLu8kA1VgPs0jyAHQ4+Y8wMMDSukPoF3rHHxBRZJwfcJNYgMVgE9uC8KsC5xm6h6aMO2tChjRlkMHixmH3QRZxkLTDyHo5sdiFO5CcKB1yKXylI6zoAlCnJhL5LC4tHB5fSrS5gf+pq6keSfhys0i26kRMo9mlsPi0Q9rQOW/XsOk8qocNVEYWCPATjSRyWZwwcnyYabdrQ/I1GDO6F+9kcUqbVLYkymERqUND9g4AIj1fjdF067kNEWCdmklk+otbXmqB1zY1cEVk1qXnbigJFS4Wp2RpE+q+UjksEhXpskwQ57lHEcKP3Fkgb4Mmg0SeLNJRMr+tc63oO8dMkxXjYHFIu6cxtUpiEds3jmgr0hDyqKiQjmX4BH+cRdFKIovFBSfrNYcjmjRx53zpUpvsLA5pm7r1qiQWA+iPuOwbmDzQyF0KqFDhHr4RbzmNdhI5LO64ST7HrsUWGjuxUzFr89OsLO5pm9q3KIlFYt9YhWkGGz6dtkNvwgoQvWXWzeDf9i+5WdzoSDyeshW6jFiRGIMrawaJ2pXVxuKeNqHfH7Cw+It3BOqb9BB+ubCI7RurHYAjbfkz4UcxL1ZyoNFFopvFpULiwV0PR7tNFC1Gqa8eEzEqiiBRScwCNsKPY196mdWjJ9HG4pY2aLCTzSw+/XREZwEfMu38hHB9KDrK4VvCjwHqVm7IQPEUriPNZ7w5SXSyOKPjLsVqee170FrEyr61Id1hpZkP4WK47mZBz24rCr2eYW6bWWzRZ5u0lIXFE5jR8CXSkxavHds2uYZYcneiUV7NJ8sXczhYpPIjxEZZ9/bUZJFaeVByaIUkcbu1aUyMLNI55hlHpjQWsftgsW+wbZN/BuVd4w6d8PZtMB/8+WJuWoHDXySWjUy0j6ZGrM6R6lASJTvWY2RxTZrsmUWjPBaRfWN2Fra6SBuMhJvi4M/fBl8PVulXJbnGArsszrAnZiwy0sLnqHXLGzkaKPwCcVcDix1ComfRb+WxuIZjYrZv0NaFf5qwQD5N5sPzb/Ozn/+nuRMEdhaxPrWsAhNsfnoKRXssrrJfZDNLz+KEHMG3FrIpj0UcvxEG+6aDHMuzIQM+NPH/+RKtaQ7+sPQCwcriFomiNQCPaVRjS2iVMNmiJmhZJBPHTmKZLKIog6nqCrICLn4l/MxgA17SFZvN8TfbG0FYWURa0FGzCa9RPRIEw+eRCpKoZXFC7C5L3YwMJbKIj7TqtyXQoY/GxQaCLOqH89NVFA/CSDP5TbCxiIIPzngRciypvsBaiJNqAqFhsUvWWVfphDJZXCD7Rhtl2OrjrfBDvRC/IRbdPkYOG4vIGtNGJxH66OvoT9gO8YueQFJZDCiJLukuk8U1mq/ajQmclnH5GPZYL4svpcsiWqDdZUJQcAr7jNgDLpw+r7JISXTGQcpkEWuWnsa+6Rj2IaF1o18Bfgcsjv/i+hoWfxF5PLrdHtvLYZWKXrt4mQOFRZJcLd0bdaWy6LRvUOwZ2Agg48Nko/48v7A4d0bezrDIItpF4SxlyISBxUjQifkbzkBQFknigWR0rlQWcQUATTIcys8BBgXYIzaN6KdLhsb4L65CtbGIyhhyhh5XGgHCi3TtDcV/CIvkFC5rn65UFnHCnRpw3Kupb+qLmGI3f8y/5pI4fmO8Vw4Li2jCsTIVEe/AdoMaSPzD7tsFiMWAnsIV1uJaJ5TLIorfqrMI2XlQKUF70WjjvXwbzOeDwZ9cA/XJxiKKPhiKNRHA5QDaMOjzV37nzkCjssJrYtYkI5hXLotkYSZTHIWMkS36Cp9h3mJ++fvz3wU4tLHYgrYKz8ODCyM0akcGGeUCsajZpGTYSyWziO0bYm4ifxJtXcAB4lS+zvHZub1hZnFroMQCRDywG5FGLJhFTn+vgyNuk6FkFrF9Q3bt4Z+wO9kFIU127OPzoOkSTDOLaN5wlh4chYOrBXJBbjjT4WLRkQCToWQWiX2Dvo7klIR2kPHKC34cSBzPHTSa/cVh8cUMGqlwAzWFfWe1hOFm0alTy2YRlcPF9g2KSJCOobWFJRrHPY6xIxZnlkV2dsEVKH0d9B+l0rJawnCy6K5AWzaLJDIM7KuZLSSAgs2c8Mdpo8ohjaVqVCSL31OjHpp1GE2ls4j0JrQbUPSZuhNdFEh3P+U/54DceGyjkWnd8OwptC6CxTut2LrJ4DgIWDqLyIYB9k2g3R7Wv4pbGJ9/PQfkxk2Lpcr0NHgbgiwb9V5P4/oE9C+HTi2fReRPXJccvEGnvCx2Udz7AjwazSwiweJV1EL+IrD+kQl1r9d/bj8hmbL26VE+i+j06nX9sNk2T9RFYSwvLBrNLKJ69rzgJ1wSoEFUOK5OoGExO0mAk6/tudbls0gyIU72TQt9qJE1lFXIySwGNI5NNFriqKjSJCtjDdmiQDRwvsZ90fAribQauHWTsQIWtfZNG3VVt/WI+8zYawU0mixVy/4i+hPHvMGpN8A6Q8HjG6qQKCyezvS0cKJlz3IKtgIWySQ6foS2dfTWBOaZIx7P3y40DvTSaJHFwr4NyvuCK2lQ9Dw8AWXxcjCLHucyi3kVLC5U7YmTGrQMkVRon1GJ1UmjhUUUnuCYlkgFo9AmDmcXvq+JsAhO7eNEOMvh3CpYRPk3+TwPlU9U4GogrPphgMa5jkZb3g1ixb0VuzTPQzRFOVsQGJhFAaZvC/NrHv0qWCT5N4c3bnFKqZC7AkTC8KABjToTx8bilNMnQ+cwU2RJL1pDFosy0kGkzI1x67USFpfU3sRWs+ln5PCz8DkutNXhsLE4QU9z5R+ikvQ0ZId3VYsaOIhFH01dktJo1KmVsNglzh+KI1vqHdONbk5ozOpwWHPDkTnl0Kn4nkoa86Zn74vVDUSxH2IyzIhONcTtK2GRlEJZIuVlKyBPr0KSodtUBTR+pTRaWcTXFlrzBUkKvzK5yL0x7hxlCJx3Q/5ITqwbbL5qWMRTKGYbEjNaFUTIkdvIMVuq9vOL+OIOae4YKVaihnpoXaFC4VR7jQ2iU/WdrIZFmhgL4FktcaXM0oHHnZPH/14OxZFMVfvJt4DclWayihfknKNmEPChqYNJV+C2GDuL5P5S/SnGilhUqx6c4cg3W6g/FDKd0vENZjtw8Pf5RKNy0N9xIpz0UjR0QzQjWb5acZgpx/8TdbbeVh+VFoHTkVQRi8plf5cWXDuyuvuJhJRJe9rqTLJSB5POfrOKPSHiqzmX06gWv3FVZ6DJnzKh82W7ogVT9EuTOvtkuESUdKJYHwp1VRBj6NSKWCTxNABnSEZ3uU3OZCMrIJzE4lTGFNKYKVVNBSMXi2p5E+m3h7NOJjXBZL3dJOq91oYVQbOGZFccbteTAzqzqO9LQ0TbxWKH6FSNHFTFYkvPIueiP3Y1KETjN10ZKme9m5mqM0R2k3ySHqZLQ1Oaz6hLOrpL1I9T71hAOG9Kawi7azKS8+ZFqvmdcWPdcLrenxrgGG9TbmU2GOh4/lvTkrv2lGG2mWDZc9dMCM3vNfuP7vqoWM41Mb7KWFStzQy8IOPWWZ/y/EKOkAujDtyWK/nH97dt8s04ndbQ6GaRlNtQ/dXKWJzo3ol7RJNR3fAMK42c+qgz5g3I2QDZs1/WOqWqDIH19Iqh4jQ1pmlUoTIWtekk/NPSC+7YWnewWPVRaTkLI5z2dddZqLihkUZO9feVXadWx6Jy81eBEm9PRzeNNbjWAkG8itOBWsNN96CYsaZb7nG9DiK5ZILDIvHc6L5JdSwqQVHOgQOIfcjhUfoWCeFWf5/6rtEXghEKPGDoqP2e+R9kWWHdp0F1Kn6ZCllUS48WzWYYuuRRyHhju32GXcN/srNqcCFDbmTU0ZJsLGiHeXfbUJ2K5LlCFpUyuTeceW+NtNeLXMbWccNmgVtR1m1hkiJhvrRZh5mxpcPnmqAwj8Uu0anI0KqQRVrw45Ysv0Pvl6uGpzIppJdoLrolaGcVh0/wvji+PIlC9UHZxULtognfkyjpaVqSaaQbgT7opK4wyQl7T0CgQ2cj2ISBRfDTQizSm/h4hz01+BL1/Z4nL/BkshtylqlNCMDY9JssR3HveD3Usei07Ik0cpGvxzpKZdZjcWqqJ1ZDA0Nt2EnL+oC+F4awgsACfK4vDzqFPy2U4NXF05FWTyuI9Xb4esRwf19DDgSt4euivVrtouX2vovs1/vl627VH7Wj5f6+lt4VuNJU5feL16gExdLManxMIBY5N/rV+IBAp4yKpmnW+CCAu1OaXbEaPwLQqesbDvbV+AiAXr899a3GhwH14lAclXPPcI0PAB/vuOxhFiezGEmN90YkRQzUZoRi4YWLadd4FwTZIijTPFgYbHEqbpHt4RrviHwTSEg/7K9SetV5se3hGu8FcJxAvX6Sk4Va4wPAWgaLV4mkxntjb8s2cZYUrPExoGzrQ0ksfsVEjfeAPhH8LIp1BPWHQNd2RMFSzb3Gh0JkVqjFq/jUeC/sDVnywq8l8QfCZKXebZ/Fcuo18cdCq095lH7hW+xqvDtabf+STCtkL9Hm0Nb4+Fgvd2HsN/ywPS2QNPo/ViAQcpAtfq0AAAAASUVORK5CYII=" alt="">
        </div>
        <div>
            <h3 id="showEmail"></h3>
            <img class="drpImg" src="https://cdn-icons-png.flaticon.com/128/7220/7220235.png" alt="">
            
            <button id="upgrade">UPGRADE</button>
            <img class="navImg1" src="https://cdn-icons-png.flaticon.com/128/4502/4502682.png" alt="">
            <img class="navImg2" src="https://cdn-icons-png.flaticon.com/128/3602/3602145.png" alt="">
            <button id="showuserbtn"></button>
        </div>
    </nav>
    <div id="menuflex">
        <nav class="text">
            <ul>
                <li class="button" id="btn1"><img src="https://app.clockify.me/assets/nav-icons/time-tracker.svg" alt=""></li>
                <li class="button" id="btn2"><img src="https://app.clockify.me/assets/nav-icons/calendar.svg" alt=""></li>
                <li class="button" id="btn3"><img src="https://app.clockify.me/assets/nav-icons/dashboard.svg" alt=""></li>
                <li class="button" id="btn4"><img src="https://app.clockify.me/assets/nav-icons/reports.svg" alt=""></li>
                <li class="button" id="btn5"><img src="https://app.clockify.me/assets/nav-icons/projects.svg" alt=""></li>
                <li class="button" id="btn6"><img src="https://app.clockify.me/assets/nav-icons/teams.svg" alt=""></li>
                <li class="button" id="btn7"><img src="https://app.clockify.me/assets/nav-icons/clients.svg" alt=""></li>
                <li class="button" id="btn8"><img src="https://app.clockify.me/assets/nav-icons/tags.svg" alt=""></li>
                <li class="button" id="btn9"><img src="https://app.clockify.me/assets/nav-icons/settings.svg" alt=""></li>
                <li class="button" id="btn10"><img src="https://cdn-icons-png.flaticon.com/128/2951/2951226.png" alt=""></li>
            </ul>
        </nav>
    
    <div id="newMenu">
        <ul>
            <li><a href="">TIME TRACKER</a></li>
            <li><a href="">CALENDER</a></li>
            <li><a href="">DASHBOARD</a></li>
            <li><a href="">REPORTS</a></li>
            <li><a href="">PROJECTS</a></li>
            <li><a href="">TEAM</a></li>
            <li><a href="">CLIENTS</a></li>
            <li><a href="">TAGS</a></li>
            <li><a href="">SETTINGS</a></li>
            <li><a href="">SHOW MORE</a></li>
        </ul>
    </div>
</div>
</div>`
}

export default navbar;