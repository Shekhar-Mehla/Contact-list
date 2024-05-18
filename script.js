let userList = [];
const contact_elm = (document.querySelector(".row2").style.display = "none");
const url = "https://randomuser.me/api?results=10";
const fetCH_api = async (url) => {
  const response = await fetch(url);
  data = await response.json();
  userList.push(...data.results);
};
fetCH_api(url);
const display_userlist = () => {
  setTimeout(() => {
    const spinner = document.querySelector(".spinner");
    const list = document.querySelector(".listcontainer");
    spinner.style.display = "none";
    list.style.display = "block";
    show_list();
  }, 2000);
};
display_userlist();
const show_list = () => {
  console.log(userList);
  let str = "";
  userList.map((item, i) => {
    console.log(item);
    str += `
<div class="accordion-item">
  <h2 class="accordion-header" id="headingTwo">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
      <img src=${item.picture.large} alt=""
      class="rounded-circle"
      

      
      width="50px">
      <div>
        <div class="fw-bolder">${item.name.first} ${item.name.last}</div>
        <small>1 baileyt </small>
      </div>
    </button>
  </h2>
  <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div class="accordion-body d-flex justify-content-center flex-column align-items-center  ">
      <img src=${item.picture.large} alt=""
      class="rounded-circle"
      

      
      width="100px">
      <div class="name">
        <i class="bi bi-person-circle"></i><span class="fw-bolder">${item.name.first} ${item.name.last}</span>
      </div>
      <div class="phone">
<a href="tel:${item.phone}">
<i class="bi bi-phone"></i><span>${item.phone}</span>
</a>

      </div>
      <div class="email">

      <a href="mailto:${item.email}">
        <i class="bi bi-envelope"></i><span>${item.email}</span>
      </a>
      </div>
      <div class="location">
        <a href="">
          <i class="bi bi-geo-alt"></i>
          <span>${item.location.street.number} ${item.location.street.name} ${item.location.city}
          ${item.location.country}</span>

        </a>
      </div>
 
  </div>
</div>

</div>



</div>`;

    document.querySelector(".contact_list").innerHTML = str;
  });
};
show_list();
