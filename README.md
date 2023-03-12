# PostApp

technologie:

 <p float="left">
 <img alt="spring"      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/800px-Spring_Framework_Logo_2018.svg.png" width=600"> 
 <img alt="Postgres"    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" width=200> 
 </p>
 <p float="left">
 <img alt="ReactJS"     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" width=200>
 <img alt="TypeScript"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1024px-Typescript.svg.png" width=200>
 </p>
 <img alt="Docker"      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/1280px-Docker_%28container_engine%29_logo.svg.png"> 

Aplikacja umożliwia dodawanie i przeglądanie ogłoszeń, komunikację sprzedawcy i klienta.

Istnieją 3 typy użytkowników:
 - [ ] administrator - zarządza całym systemem lub jego częścią
 - [ ] użytkownik - przeszukuje ogłoszenia, komunikuje się z sprzedawcą
 - [ ] sprzedawca - tworzy i aktualizuje oferty, 

Użytkownik:
 - [ ] zakładanie konta
 - możliwość wyszukiwania ofert/ogłoszeń po:
    * [ ] lokalizacji
    * [ ] parametrach
    * [ ] tytule
 - [ ] możliwość komunikacji z autorem oferty

Sprzedawca:
 - [ ] tworzy oferty/ogłoszenia
 - [ ] zarządza ofertami/ogłoszenia
 - [ ] możliwość komunikacji z klientem

Aplikacja ma funkcje:
 - [ ] wyszukiwarka ofert/ogłoszeń
 - [ ] zarządzanie zleceniami utworzonymi przez Użytkownika
    * [ ] sprawdzanie statusu 
    * [ ] dodatkowe informacje
 - [ ] zarządzanie zleconymi zadaniami Sprzedawcom
    * [ ] aktualizacja statusu oferty
    * [ ] ustawianie ceny

przykłady użycia:
 - użytkownik:
  * wchodzi na widok wyszukiwarki
  * ustawia kategorię ogłoszeń
  * wpisuje frazę do wyszukiwarki
  * przegląda ogłoszenia
  * otwiera wybrane ogłoszenie
  * przegląda zdjęcia, opis
  * jeśli ogłoszenie go zainteresuje, rozpoczyna chat ze sprzedawcą
     - w tym momęcie tworzone jest nowe zamówienie/ticket, status oczekujące
  * sprzedawca i użytkownik uzgadniają detale
     - status zamówienia jest ustawiany na `w trakcie`
     - status zamówienia może zostać zmieniony na `odrzucone`
  * komunikuje się ze sprzedawcą w celu sfinalizowania zamówienia
     - status zamówienia może zostać ustawiony na `zakończone`

