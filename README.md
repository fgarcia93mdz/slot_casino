# slot_casino

body {
  margin: 0;
  padding: 0;
  font-family: "Gill Sans", sans-serif;
  /* background-image: url("../assets/img/fondoCasino.png");
  background-repeat: repeat;
  background-size: 100%;
  background-attachment: fixed;
  background-position-y: 100px; */
}

.card {
  width: 210px;
  height: 270px;
  background: white;
  border-radius: 10px;
  transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin-left: 42%;
}

#imgMe {
  width: 188px;
  height: 252px;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 8px;
}

.shadow {
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
    0 0 0 2px rgb(190, 190, 190),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}

.texts-set {
  background-color: aliceblue !important;
  border-radius: 10px;
  padding: 10px;
}


#paragraph-presentation {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-left: 65px;
  color: #5d5d5d;
}

.gallery img {
  width: 600px;
  height: 600px;
  margin: 10px;
  margin-left: 5.5%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-group-item span {
  font-size: 1.2rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 90%;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  margin: auto;
}

.title {
  font-size: 28px;
  color: royalblue;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.title::before,
.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: royalblue;
}

.title::before {
  width: 18px;
  height: 18px;
  background-color: royalblue;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.message,
.sigin {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
}

.sigin {
  text-align: center;
}

.sigin a {
  color: royalblue;
}

.sigin a:hover {
  text-decoration: underline royalblue;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input+span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown+span {
  top: 15px;
  font-size: 0.9em;
}

.form label .input:focus+span,
.form label .input:valid+span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

.form label .input:valid+span {
  color: green;
}

.submit {
  border: none;
  outline: none;
  background-color: royalblue;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
}

.submit:hover {
  background-color: rgb(56, 90, 194);
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}

.alert-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s ease-in-out;
}

.alert-content {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 40.5%;
}

.alert-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #000;
  font-family: "Gill Sans", sans-serif;
}

.close-btn {
  background-color: #2b8bec;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 1rem;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}

.close-btn:hover {
  background-color: #0d6efd;
}

/*/Nav/*/
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

nav h1 {
  font-size: 2rem;
  margin: 0;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  margin-left: 1rem;
}

nav a {
  color: #212529;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
}

nav a:hover {
  color: #0d6efd;
}

#logoCasino {
  margin-left: 20px;
  width: 50px;
  height: 50px;
}

#options-dropdown {
  color: #000000;
}

/*/Footer/*/
#logoCasinoFooter {
  width: 100px;
  height: 100px;
  margin-left: 70px;
  margin-top: 10px;
  margin-bottom: 0;
  margin-right: 50px;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.site-info h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.site-info p {
  margin: 0;
}

.social-media {
  margin-top: 20px;
}

.social-media h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.social-media ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.social-media li {
  margin: 0 10px;
}

.social-media a {
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-media a:hover {
  color: #f00;
}

.fa-facebook {
  color: #3b5998;
}

.fa-twitter {
  color: #1da1f2;
}

.fa-instagram {
  color: #e4405f;
}

.fa-youtube {
  color: #cd201f;
}

.subscribe {
  position: relative;
  height: 140px;
  width: 240px;
  padding: 20px;
  background-color: #FFF;
  border-radius: 4px;
  color: #333;
  box-shadow: 0px 0px 60px 5px rgba(0, 0, 0, 0.4);
}

.subscribe:after {
  position: absolute;
  content: "";
  right: -10px;
  bottom: 18px;
  width: 0;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #1a044e;
}

.subscribe p {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 4px;
  line-height: 28px;
}

.subscribe input {
  position: absolute;
  bottom: 30px;
  border: none;
  border-bottom: 1px solid #d4d4d4;
  padding: 10px;
  width: 82%;
  background: transparent;
  transition: all .25s ease;
}

.subscribe input:focus {
  outline: none;
  border-bottom: 1px solid #0d095e;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 'sans-serif';
}

.subscribe .submit-btn {
  position: absolute;
  border-radius: 30px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  background-color: #0f0092;
  color: #FFF;
  padding: 12px 25px;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 5px;
  right: -10px;
  bottom: -20px;
  cursor: pointer;
  transition: all .25s ease;
  box-shadow: -5px 6px 20px 0px rgba(26, 26, 26, 0.4);
}

.subscribe .submit-btn:hover {
  background-color: #07013d;
  box-shadow: -5px 6px 20px 0px rgba(88, 88, 88, 0.569);
}

/*/Slot/*/
.promotions {
  background-color: #f1eded;
  /* padding: 2rem;*/
}

.promotions h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.promotions-container {
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: space-between;
  flex-direction: row;
}

.promotion {
  width: calc(33.33% - 1rem);
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

/* #promotion_second {
   margin-left: 100px; 
} */

.promotion img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.promotion h3 {
  font-size: 1.5rem;
  margin: 1rem;
}

.promotion p {
  margin: 1rem;
}

.button {
  display: block;
  text-align: center;
  background-color: #2b8bec;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  margin: 1rem;
  transition: background-color 0.2s ease-in-out;
}

.button:hover {
  background-color: #0d6efd;
}

/*/Fin Slot/*/

/*/Events/*/
.eventsMain {
  background-image: url("../assets/img/event-background.png") !important;
  background-size: cover;
  background-size: 100%;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-position-y: 100px;
  background-position-y: 1%;
  padding: 2rem;
  margin-left: -25px;
}

#event_second {
  margin-left: 100px;
}

.eventsMain h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: white
}

.events-container {
  display: inline-flex;
}

.event {
  width: calc(33.33% - 1rem);
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(245, 237, 237, 1);
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(90, 89, 89, 0.704);
}

.event img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.event h3 {
  font-size: 1.5rem;
  margin: 1rem;
  color: white;
}

.event p {
  margin: 1rem;
  color: white;
}

.button {
  display: block;
  text-align: center;
  background-color: #2b8bec;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  margin: 1rem;
  transition: background-color 0.2s ease-in-out;
}

.button:hover {
  background-color: #0d6efd;
}

/*/Fin Events/*/

/*/Ours/*/
.card {
  width: 200px;
  height: 260px;
  background: white;
  border-radius: 10px;
  transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin-left: 42%;
}

#imgMe {
  width: 188px;
  height: 252px;
  border-radius: 10px;
  margin-left: 6px;
  margin-top: 4px;
}

.shadow {
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
    0 0 0 2px rgb(190, 190, 190),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}

.texts-set {
  background-color: aliceblue !important;
  border-radius: 10px;
  padding: 10px;
}

#title-presentation {
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  color: #000000;
}

#subtitle-presentation {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #3c9fe6;
}

#paragraph-presentation {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  margin-left: 65px;
  color: #000000;
}

.gallery img {
  width: 600px;
  height: 600px;
  margin: 10px;
  margin-left: 5.5%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

/*/Fin Ours/*/
/*/Machine Slot/*/
h1 {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  letter-spacing: 5px;
  font-size: 50px;
  margin-top: 2%;
  margin-bottom: 110px;
}

#h1-machine {
  color: white
}

ul {
  list-style: none;
  padding-bottom: px;
}

li {
  float: left;
}

.MainWindow {
  border-style: double;
  width: 60%;
  margin: auto;
  text-align: center;
  margin-top: 50px;
  border-radius: 20px;
  backdrop-filter: saturate(70%) blur(20px);
  display: flex;
}

.Slot {
  display: inline-block;
  margin-left: 45px;
}

Button {
  font-size: 24px;
  cursor: pointer;
  border: none;
  padding: 15px 30px;
  background-color: rgb(78, 111, 201);
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 20px;
}

#Highlight {
  border-color: red;
  border-style: solid;
  width: 89%;
  top: 29%;
  margin-left: 5px;
  height: 190px;
  min-height: 1px;
  z-index: -100;
  position: absolute;
  box-shadow: 1px 5px 80px 5px rgba(238, 218, 35, 0.83);
}

#legenda {
  width: 50%;
  background-color: rgb(118, 249, 82);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  position: absolute;
  top: 22%;
  display: none;
  margin-left: 360px;
  height: 70px;
  text-align: center;
  font-size: 40px;
  border-radius: 50%;
}

#loser {
  width: 50%;
  background-color: rgb(249, 82, 82);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  position: absolute;
  top: 22%;
  display: none;
  margin-left: 360px;
  height: 70px;
  text-align: center;
  font-size: 40px;
  border-radius: 50%;
}

.upper {
  position: relative;
}

.slides {
  position: relative;
}

.lower {
  position: relative;
}

.order-button {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 80%;
}

#button-slot {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: inherit;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #000000;
  background-color: #e0e8ef;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: rgba(255, 255, 255, 0.333);
  border-radius: 40px 40px 40px 40px;
  padding: 16px 24px 16px 28px;
  transform: translate(0px, 0px) rotate(0deg);
  transition: 0.2s;
  box-shadow: -4px -2px 16px 0px #ffffff, 4px 2px 16px 0px rgb(95 157 231 / 48%);
}

#button-slot:hover {
  color: #000000;
  background-color: #E5EDF5;
  box-shadow: -2px -1px 8px 0px #ffffff, 2px 1px 8px 0px rgb(95 157 231 / 48%);
}

#button-slot:active {
  box-shadow: none;
}

.upper img {
  width: 190px;
  margin-left: -30%;
  margin-top: 15%;
}
.slides img {
  width: 190px;
  margin-left: -30%;
  margin-top: 15%;
}
.lower img {
  width: 190px;
  margin-left: -30%;
  margin-top: 15%;
}

/*/Fin Machine Slot/*/

/*/ Receives Promotions /*/
:root {
  --primary-color: #007bff;
  --text-color: #333;
  --border-color: #191919;
}

.main-container {
  margin-top: 100px;
  margin-bottom: 100px;
  box-shadow: 0 2px 4px rgb(0, 0, 0);
  border-radius: 10px;
  overflow: hidden;

}

.form-label {
  color: var(--text-color);
}

.form-control {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--border-color);
  transition: border-color 0.3s ease;
}

.form-control:focus {
  border-color: var(--primary-color);
  outline: none;
}

.btn-primary {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: #000000;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: darken(var(--primary-color), 10%);
}

/*/Fin Receives Promotions /*/

/*/media queries/*/
@media (max-width: 767px) {

  .list-group-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .list-group-item span {
    margin-top: 10px;
  }

  /*/Nav/*/
  nav {
    flex-direction: column;
    align-items: flex-start;
  }

  nav h1 {
    font-size: 1.5rem;
  }

  nav ul {
    margin-top: 1rem;
  }

  nav li {
    margin: 0.5rem 0;
  }

  nav a {
    font-size: 1rem;
  }

  /*/ Fin Nav /*/

  /*/ Footer /*/
  #logoCasinoFooter {
    width: 50px;
    height: 50px;
    margin-left: 35px;
    margin-right: 25px;
  }

  .footer-container {
    flex-direction: column;
  }

  .site-info h3,
  .social-media h3 {
    font-size: 1.2rem;
  }

  .social-media ul {
    flex-direction: column;
    align-items: center;
  }

  .social-media li {
    margin: 10px 0;
  }

  .social-media a {
    font-size: 1.2rem;
  }

  .subscribe {
    width: 100%;
    box-sizing: border-box;
  }

  .subscribe input {
    width: 90%;
  }

  .subscribe .submit-btn {
    right: 10px;
    bottom: 10px;
  }

  /*/ Fin Footer /*/

  /*/Slot/*/
  .promotions-container {
    flex-direction: column;

  }

  .promotion {
    width: 100% !important;
    margin-bottom: 1rem;
  }

  #promotion_second {
    margin-left: 0 !important;
  }

  .promotion img {
    height: auto;
  }

  .button {
    padding: 0.5rem;
  }

  /*/ Fin Slot /*/

  /*/Events/*/
  .events-container {
    flex-direction: column;
  }

  .eventsMain {

    background-image: none !important;
  }

  .event {
    width: 100%;
    margin-bottom: 2rem;
    box-shadow: 0 2px 4px rgb(0, 0, 0, 1);
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 1rem;
    background-color: rgba(203, 203, 203, 0.752);
  }

  .eventsMain h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: black;
  }

  .event h3,
  .event p {
    color: black;
  }

  #event_second {
    margin-left: 0 !important;
  }

  .event img {
    height: auto;
  }

  .button {
    padding: 0.5rem;
  }

  /*/ Fin Events /*/

  /*/ Receives Promotions /*/
  .main-container {
    margin-top: 0px;
  }

  .form-control {
    margin-bottom: 10px;
  }

  .btn-primary {
    width: 100%;
  }

  /*/ Fin Receives Promotions /*/

  /*/Ours/*/
  .card {
    width: 100%;
    height: auto;
    margin-left: 0;
  }

  #imgMe {
    width: 50%;
    height: auto;
    margin-left: 25%;
  }

  #title-presentation {
    font-size: 30px;
  }

  #subtitle-presentation {
    font-size: 20px;
  }

  #paragraph-presentation {
    font-size: 16px;
    margin-left: 10px;
  }

  .gallery img {
    width: 100%;
    height: auto;
    margin-left: 0;
  }

  /*/Fin Ours/*/

  /*/Slot Machine /*/
  h1 {
    margin-top: 8%;
    font-size: 14px;
    margin-bottom: 20%;
  }

  #h1-machine {
    color: white;
  }

  .MainWindow {
    width: 90%;
    flex-direction: column;
  }

  .Slot {
    margin-left: 0;
    height: -90%;
  }

  Button {
    font-size: 18px;
    padding: 10px 20px;
    margin-left: 0;
    margin-right: 0;
  }

  #Highlight {
    width: 100%;
    margin-left: 0;
    height: 10%;
    top: 35%;
  }

  #legenda {
    width: 50%;
    background-color: rgb(118, 249, 82);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    position: absolute;
    top: 17%;
    display: none;
    margin-left: 100px;
    height: 25px;
    text-align: center;
    font-size: 15px;
    border-radius: 0%;
  }

  #loser {
    width: 50%;
    background-color: rgb(249, 101, 82);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    position: absolute;
    top: 17%;
    display: none;
    margin-left: 100px;
    height: 25px;
    text-align: center;
    font-size: 15px;
    border-radius: 0%;
  }

  #slot1 {
    font-size: 10px;
  }

  .upper img {
    margin-top: 80%;
    margin-left: -40%;
    width: 40%;
  }

  .slides img {
    margin-top: 80%;
    margin-left: -40%;
    width: 40%;
  }

  .lower img {
    margin-top: 80%;
    margin-left: -40%;
    width: 40%;
  }

  #ul-slot {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  .order-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10%;
  }

  #button-slot {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: inherit;
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    color: #000000;
    background-color: #e0e8ef;
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-color: rgba(255, 255, 255, 0.333);
    border-radius: 40px 40px 40px 40px;
    padding: 16px 24px 16px 28px;
    transform: translate(0px, 0px) rotate(0deg);
    transition: 0.2s;
    box-shadow: -4px -2px 16px 0px #ffffff, 4px 2px 16px 0px rgb(95 157 231 / 48%);
  }

  #button-slot:hover {
    color: #000000;
    background-color: #E5EDF5;
    box-shadow: -2px -1px 8px 0px #ffffff, 2px 1px 8px 0px rgb(95 157 231 / 48%);
  }

  #button-slot:active {
    box-shadow: none;
  }

  /*/Fin Slot Machine/*/
}