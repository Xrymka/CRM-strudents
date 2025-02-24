export class createIcons {
  // функция создания иконки закрытия
  static createCrossIcon() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "17");
    svg.setAttribute("height", "17");
    svg.setAttribute("viewBox", "0 0 17 17");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("class", "modal__close-btn");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M16.2333 1.73333L15.2666 0.766664L8.49991 7.53336L1.73324 0.766696L0.766576 1.73336L7.53324 8.50003L0.766603 15.2667L1.73327 16.2333L8.49991 9.46669L15.2666 16.2334L16.2332 15.2667L9.46657 8.50003L16.2333 1.73333Z");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute("clip-rule", "evenodd");
    path.setAttribute("fill", "#B0B0B0");

    svg.appendChild(path);
    return svg;
  }

  // функция создания стрелки сортировки
  static createArrowIcon() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "8");
    svg.setAttribute("height", "8");
    svg.setAttribute("viewBox", "0 0 8 8");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("class", "arrow-icon");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M3.49691e-07 4L0.705 4.705L3.5 1.915L3.5 8L4.5 8L4.5 1.915L7.29 4.71L8 4L4 -3.49691e-07L3.49691e-07 4Z");
    path.setAttribute("fill", "#9873FF");

    svg.appendChild(path);
    return svg;
  }

  // функция создания иконки добавления клиента
  static createAddClientIcon() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "23");
    svg.setAttribute("height", "16");
    svg.setAttribute("viewBox", "0 0 23 16");
    svg.setAttribute("class", "add-client-icon");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M14.5 8C16.71 8 18.5 6.21 18.5 4C18.5 1.79 16.71 0 14.5 0C12.29 0 10.5 1.79 10.5 4C10.5 6.21 12.29 8 14.5 8ZM5.5 6V3H3.5V6H0.5V8H3.5V11H5.5V8H8.5V6H5.5ZM14.5 10C11.83 10 6.5 11.34 6.5 14V16H22.5V14C22.5 11.34 17.17 10 14.5 10Z");
    path.setAttribute("fill", "#9873FF");

    svg.appendChild(path);
    return svg;
  }

  // функция создания иконки добавления контакта
  static createAddIcon() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "14");
    svg.setAttribute("height", "14");
    svg.setAttribute("viewBox", "0 0 14 14");
    svg.setAttribute("class", "add-icon");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M6.99998 3.66683C6.63331 3.66683 6.33331 3.96683 6.33331 4.3335V6.3335H4.33331C3.96665 6.3335 3.66665 6.6335 3.66665 7.00016C3.66665 7.36683 3.96665 7.66683 4.33331 7.66683H6.33331V9.66683C6.33331 10.0335 6.63331 10.3335 6.99998 10.3335C7.36665 10.3335 7.66665 10.0335 7.66665 9.66683V7.66683H9.66665C10.0333 7.66683 10.3333 7.36683 10.3333 7.00016C10.3333 6.6335 10.0333 6.3335 9.66665 6.3335H7.66665V4.3335C7.66665 3.96683 7.36665 3.66683 6.99998 3.66683ZM6.99998 0.333496C3.31998 0.333496 0.333313 3.32016 0.333313 7.00016C0.333313 10.6802 3.31998 13.6668 6.99998 13.6668C10.68 13.6668 13.6666 10.6802 13.6666 7.00016C13.6666 3.32016 10.68 0.333496 6.99998 0.333496ZM6.99998 12.3335C4.05998 12.3335 1.66665 9.94016 1.66665 7.00016C1.66665 4.06016 4.05998 1.66683 6.99998 1.66683C9.93998 1.66683 12.3333 4.06016 12.3333 7.00016C12.3333 9.94016 9.93998 12.3335 6.99998 12.3335Z");
    path.setAttribute("fill", "#9873FF");

    svg.appendChild(path);
    return svg;
  }

  static createSvgIcon() {
    // Create SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 160 160");
    svg.setAttribute("height", "16");
    svg.setAttribute("width", "16");

    // Create circle element
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", "60");
    circle.setAttribute("cx", "80");
    circle.setAttribute("cy", "80");
    circle.setAttribute("fill", "transparent");
    circle.setAttribute("stroke", "#9873FF");
    circle.setAttribute("stroke-width", "13.5px");

    // Create group element
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("fill", "#9873FF");

    // Create first rectangle element
    const rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect1.setAttribute("width", "13.5");
    rect1.setAttribute("height", "66.5");
    rect1.setAttribute("x", "73.3");
    rect1.setAttribute("y", "46.6");
    rect1.setAttribute("rx", "7");

    // Create second rectangle element
    const rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect2.setAttribute("width", "13.5");
    rect2.setAttribute("height", "66.5");
    rect2.setAttribute("x", "73.3");
    rect2.setAttribute("y", "46.6");
    rect2.setAttribute("rx", "7");
    rect2.setAttribute("transform", "rotate(90 80 80)");

    // Append elements
    group.appendChild(rect1);
    group.appendChild(rect2);
    svg.appendChild(circle);
    svg.appendChild(group);

    // Optionally, you can specify an element to append this SVG to
    // For example: document.body.appendChild(svg);
    // Or return the SVG element if you want to append it elsewhere
    return svg;
  }

//   `<svg viewBox="0 0 160 160" height="16" width="16" "http://www.w3.org/2000/svg"="http://www.w3.org/2000/svg" >
//     <circle r="60" cx="80" cy="80" fill="transparent" stroke="#9873FF" stroke-width="13.5px"></circle>
//     <g fill="#9873FF" >
//       <rect width="13.5" height="66.5" x="73.3" y="46.6" rx="7"></rect>
//       <rect width="13.5" height="66.5" x="73.3" y="46.6" rx="7" transform = "rotate(90 80 80)"></rect>
//     </g>
// </svg>

  // функция создания иконки вк
  static createVkIcon() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("class", "vk");

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("opacity", "0.7");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z");
    path.setAttribute("fill", "#9873FF");

    g.appendChild(path);
    svg.appendChild(g);

    return svg;
  }

  // функция создания иконки fb
  static createFacebookIcon() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("class", "fb");

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("opacity", "0.7");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z");
    path.setAttribute("fill", "#9873FF");

    g.appendChild(path);
    svg.appendChild(g);

    return svg;
  }

  // функция создания иконки телефона
  static createPhoneIcon() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("class", "phone");

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("opacity", "0.7");

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "8");
    circle.setAttribute("cy", "8");
    circle.setAttribute("r", "8");
    circle.setAttribute("fill", "#9873FF");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z");
    path.setAttribute("fill", "white");

    g.appendChild(circle);
    g.appendChild(path);
    svg.appendChild(g);

    return svg;
  }

  // функция создания иконки почты
  static createEmailIcon() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("class", "mail");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("opacity", "0.7");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute("clip-rule", "evenodd");
    path.setAttribute("d", "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z");
    path.setAttribute("fill", "#9873FF");

    svg.appendChild(path);

    return svg;
  }

  // функция создания иконки для других контактов
  static createContactIcon() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("class", "contact");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("opacity", "0.7");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute("clip-rule", "evenodd");
    path.setAttribute("d", "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z");
    path.setAttribute("fill", "#9873FF");

    svg.appendChild(path);

    return svg;
  }

  // функция создания иконки удаления
  static createDeleteIcon() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "12");
    svg.setAttribute("height", "12");
    svg.setAttribute("viewBox", "0 0 12 12");
    svg.setAttribute("class", "delete-icon");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z");
    path.setAttribute("fill", "#F06A4D");

    svg.appendChild(path);
    return svg;
  }

  // функция создания иконки изменения
  static createEditIcon() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "13");
    svg.setAttribute("height", "13");
    svg.setAttribute("viewBox", "0 0 13 13");
    svg.setAttribute("class", "edit-icon");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M0 10.5002V13.0002H2.5L9.87333 5.62687L7.37333 3.12687L0 10.5002ZM11.8067 3.69354C12.0667 3.43354 12.0667 3.01354 11.8067 2.75354L10.2467 1.19354C9.98667 0.933535 9.56667 0.933535 9.30667 1.19354L8.08667 2.41354L10.5867 4.91354L11.8067 3.69354Z");
    path.setAttribute("fill", "#9873FF");

    svg.appendChild(path);
    return svg;
  }

    // функция создания иконки загрузки
    static createLoadIcon() {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "13");
      svg.setAttribute("height", "13");
      svg.setAttribute("viewBox", "0 0 13 13");
      svg.setAttribute("class", "load-icon");
      svg.setAttribute("fill", "none");

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M1.00008 6.04008C1.00008 8.82356 3.2566 11.0801 6.04008 11.0801C8.82356 11.0801 11.0801 8.82356 11.0801 6.04008C11.0801 3.2566 8.82356 1.00008 6.04008 1.00008C5.38922 1.00008 4.7672 1.12342 4.196 1.34812");
      path.setAttribute("stroke", "#9873FF");
      path.setAttribute("stroke-width", "2");
      path.setAttribute("stroke-miterlimit", "10");
      path.setAttribute("stroke-linecap", "round");

      svg.appendChild(path);
      return svg;
    }

    // функция создания иконки стрелки открытия/закрытия
    static createArrowSelectIcon() {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "10");
      svg.setAttribute("height", "6");
      svg.setAttribute("viewBox", "0 0 10 6");
      svg.setAttribute("fill", "none");

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M0.495029 0.690033C0.250029 0.935033 0.250029 1.33003 0.495029 1.57503L4.65003 5.73003C4.84503 5.92503 5.16003 5.92503 5.35503 5.73003L9.51003 1.57503C9.75503 1.33003 9.75503 0.935032 9.51003 0.690033C9.26503 0.445032 8.87003 0.445032 8.62503 0.690033L5.00003 4.31003L1.37503 0.685034C1.13503 0.445034 0.735029 0.445033 0.495029 0.690033Z");
      path.setAttribute("fill", "#9873FF");

      svg.appendChild(path);
      return svg;
    }
}
