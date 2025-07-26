const guests = [
  { id: "1", name: "Karla Melgar & Alfredo de la Rosa", passes: 3, table: 2, gender: "mixto" },
  { id: "2", name: "Familia Hurtado Campos", passes: 4, table: 2, gender: "mixto" },
  { id: "3", name: "Familia Martinez Hurtado", passes: 2, table: 6, gender: "mixto" },
  { id: "4", name: "Familia Hurtado Blanco", passes: 3, table: 2, gender: "mixto" },
  { id: "5", name: "Margarita Rodriguez de Zepeda", passes: 1, table: 2, gender: "femenino" },
  { id: "6", name: "Lubia Rodriguez y Familia", passes: 3, table: 6, gender: "mixto" },
  { id: "7", name: "Walter Hurtado", passes: 1, table: 21, gender: "masculino" },
  { id: "8", name: "Juan Hurtado", passes: 2, table: 21, gender: "masculino" },
  { id: "9", name: "Lester Rodriguez & Dallana", passes: 2, table: 21, gender: "mixto" },
  { id: "10", name: "Elvia Melgar de Castañeda", passes: 1, table: 21, gender: "femenino" },
  { id: "11", name: "Ricardo Soza", passes: 2, table: 21, gender: "masculino" },
  { id: "12", name: "Fernando & María Fernanda", passes: 2, table: 20, gender: "mixto" },
  { id: "13", name: "Pablo Rosales & Kristhel Estrada de Rosales", passes: 2, table: 1, gender: "mixto" },
  { id: "14", name: "Gerson Ramirez & Diana Vanessa López González de Ramírez", passes: 2, table: 1, gender: "mixto" },
  { id: "15", name: "Viviana Mazariegos", passes: 1, table: 1, gender: "femenino" },
  { id: "16", name: "Carlos Cali & Kimberly Vasquez de Cali", passes: 2, table: 19, gender: "mixto" },
  { id: "17", name: "Emilsa Valdez & Allan Borrayo", passes: 2, table: 19, gender: "mixto" },
  { id: "18", name: "Byron Yojcom & Damaris Boche de Yojcom", passes: 2, table: 19, gender: "mixto" },
  { id: "19", name: "Nora Fernanda Ortiz", passes: 1, table: 1, gender: "femenino" },
  { id: "20", name: "Ervin José De León M.", passes: 1, table: 1, gender: "masculino" },
  { id: "21", name: "Meli Alvarado & Awner Alarcon", passes: 2, table: 18, gender: "mixto" },
  { id: "22", name: "Gissell", passes: 2, table: 18, gender: "femenino" },
  { id: "23", name: "Majito de Pedroza", passes: 1, table: 18, gender: "femenino" },
  { id: "24", name: "Edgar Berges", passes: 1, table: 18, gender: "masculino" },
  { id: "25", name: "Brendy Cacao", passes: 1, table: 18, gender: "femenino" },
  { id: "26", name: "Fernando De Paz", passes: 1, table: 18, gender: "masculino" },
  { id: "27", name: "Adriana Miranda", passes: 1, table: 18, gender: "femenino" },
  { id: "28", name: "Alondara", passes: 1, table: 18, gender: "femenino" },
  { id: "29", name: "Velveth", passes: 1, table: 18, gender: "femenino" },
  { id: "30", name: "Alex", passes: 1, table: 18, gender: "masculino" },
  { id: "31", name: "Bryan Zuleta & Emilia", passes: 2, table: 1, gender: "mixto" },
  { id: "32", name: "Julio García & Adriana Batres", passes: 2, table: 19, gender: "mixto" },
  { id: "33", name: "Sharon Ulin & Carlos Ulin", passes: 2, table: 19, gender: "mixto" },
  { id: "34", name: "Wilson Cuyuch", passes: 2, table: 20, gender: "masculino" },
  { id: "35", name: "Karen Morales", passes: 1, table: 20, gender: "femenino" },
  { id: "36", name: "Doris Ruano", passes: 1, table: 20, gender: "femenino" },
  { id: "37", name: "Juan", passes: 1, table: 20, gender: "masculino" },
  { id: "38", name: "Gabriela", passes: 1, table: 20, gender: "femenino" },
  { id: "39", name: "Diego", passes: 1, table: 20, gender: "masculino" },
  { id: "40", name: "Luis & Esposa", passes: 2, table: 20, gender: "mixto" },
  { id: "41", name: "Kevin & Ashly", passes: 2, table: 20, gender: "mixto" },
  { id: "42", name: "Génesis Ramírez", passes: 1, table: 20, gender: "femenino" },
  { id: "43", name: "Brandish & Dallana", passes: 3, table: 4, gender: "mixto" },
  { id: "44", name: "Erasmo & Nuria", passes: 4, table: 4, gender: "mixto" },
  { id: "45", name: "Persy & Norma", passes: 3, table: 4, gender: "mixto" },
  { id: "46", name: "Persy Jr.", passes: 1, table: 4, gender: "masculino" },
  { id: "47", name: "Lorena Najera & Marlon Najera", passes: 2, table: 3, gender: "mixto" },
  { id: "48", name: "Clarissa Ramírez & Willian Orozco", passes: 2, table: 3, gender: "mixto" },
  { id: "49", name: "Marcela & Alejandro", passes: 5, table: 6, gender: "mixto" },
  { id: "50", name: "Baltazar & Dora", passes: 2, table: 3, gender: "mixto" },
  { id: "51", name: "Rudy & Marta", passes: 2, table: 5, gender: "mixto" },
  { id: "52", name: "Emily & Alex", passes: 2, table: 3, gender: "mixto" },
  { id: "53", name: "Ovidio Pivaral & Sesibel De Pivaral", passes: 2, table: 5, gender: "mixto" },
  { id: "54", name: "Jose & Yes", passes: 5, table: 11, gender: "mixto" },
  { id: "55", name: "Omar & Shirley", passes: 3, table: 3, gender: "mixto" },
  { id: "56", name: "Ana Leal", passes: 1, table: 11, gender: "femenino" },
  { id: "57", name: "Carlos & Carmen", passes: 2, table: 8, gender: "mixto" },
  { id: "58", name: "Everardo & Florency", passes: 3, table: 8, gender: "mixto" },
  { id: "59", name: "Pepe & Miriam", passes: 2, table: 8, gender: "mixto" },
  { id: "60", name: "Ani & Anita", passes: 2, table: 8, gender: "femenino" },
  { id: "61", name: "Hector & Sonia", passes: 2, table: 7, gender: "mixto" },
  { id: "62", name: "Gabriela", passes: 1, table: 7, gender: "femenino" },
  { id: "63", name: "Iris & Nancy", passes: 2, table: 7, gender: "femenino" },
  { id: "64", name: "Gerardo & Paty", passes: 3, table: 7, gender: "mixto" },
  { id: "65", name: "Karen", passes: 1, table: 7, gender: "femenino" },
  { id: "66", name: "Guillermo & Doris", passes: 4, table: 9, gender: "mixto" },
  { id: "67", name: "Marisol", passes: 3, table: 15, gender: "femenino" },
  { id: "68", name: "Hugo & Marcia", passes: 4, table: 9, gender: "mixto" },
  { id: "69", name: "Geova", passes: 1, table: 13, gender: "masculino" },
  { id: "70", name: "Luis Carlos", passes: 1, table: 13, gender: "masculino" },
  { id: "71", name: "Daniel", passes: 1, table: 13, gender: "masculino" },
  { id: "72", name: "Ever & Suly", passes: 4, table: 13, gender: "mixto" },
  { id: "73", name: "Josue & Ivy", passes: 2, table: 13, gender: "mixto" },
  { id: "74", name: "Carlitos & Mary", passes: 4, table: 15, gender: "mixto" },
  { id: "75", name: "Gabriel & Monica", passes: 2, table: 8, gender: "mixto" },
  { id: "76", name: "Keneth & Sheily", passes: 2, table: 15, gender: "mixto" },
  { id: "77", name: "Luigi & Majo", passes: 2, table: 10, gender: "mixto" },
  { id: "78", name: "Roberto & Maricela", passes: 2, table: 10, gender: "mixto" },
  { id: "79", name: "Madelyn", passes: 1, table: 10, gender: "femenino" },
  { id: "80", name: "Christian", passes: 1, table: 10, gender: "masculino" },
  { id: "81", name: "Aldo & Marelyn", passes: 2, table: 10, gender: "mixto" },
  { id: "82", name: "Percy & Bianca", passes: 2, table: 10, gender: "mixto" },
  { id: "83", name: "Hector & Maybelin", passes: 2, table: 12, gender: "mixto" },
  { id: "84", name: "Marito", passes: 1, table: 12, gender: "masculino" },
  { id: "85", name: "Gadiel & Sofi", passes: 2, table: 12, gender: "mixto" },
  { id: "86", name: "Mario & Brenda", passes: 2, table: 12, gender: "mixto" },
  { id: "87", name: "Cristian & Kathy", passes: 2, table: 12, gender: "mixto" },
  { id: "88", name: "Kathy Reyes", passes: 1, table: 12, gender: "femenino" },
  { id: "89", name: "Fernando", passes: 2, table: 14, gender: "masculino" },
  { id: "90", name: "Axel", passes: 1, table: 14, gender: "masculino" },
  { id: "91", name: "Selma", passes: 1, table: 14, gender: "femenino" },
  { id: "92", name: "Dalia", passes: 2, table: 14, gender: "mixto" },
  { id: "93", name: "Jacqueline", passes: 1, table: 14, gender: "femenino" },
  { id: "94", name: "Emilio & Katherine", passes: 2, table: 14, gender: "mixto" },
  { id: "95", name: "Ronald", passes: 1, table: 14, gender: "masculino" },
  { id: "96", name: "Sheerley", passes: 1, table: 16, gender: "femenino" },
  { id: "97", name: "Flor", passes: 1, table: 16, gender: "femenino" },
  { id: "98", name: "Jose & Kimo", passes: 2, table: 16, gender: "mixto" },
  { id: "99", name: "Carlos & Miriam", passes: 2, table: 16, gender: "mixto" },
  { id: "100", name: "Marcela", passes: 1, table: 17, gender: "femenino" },
  { id: "101", name: "Wendy", passes: 1, table: 17, gender: "femenino" },
  { id: "102", name: "Carlos Padilla", passes: 1, table: 17, gender: "masculino" },
  { id: "103", name: "Gabriela", passes: 2, table: 16, gender: "femenino" },
  { id: "104", name: "Carol", passes: 2, table: 17, gender: "femenino" },
  { id: "105", name: "Lucrecia", passes: 1, table: 17, gender: "femenino" },
  { id: "106", name: "Luz", passes: 1, table: 17, gender: "femenino" },
  { id: "107", name: "Mario & Esposa", passes: 1, table: 17, gender: "mixto" },
  { id: "108", name: "Carol", passes: 1, table: 17, gender: "femenino" },
  { id: "109", name: "Daniel", passes: 1, table: 17, gender: "femenino" },
  { id: "110", name: "Magzul y Jessica ", passes: 2, table: 12, gender: "mixto" }, 
  { id: "111", name: "Ivan y Lucy", passes: 2, table: 17, gender: "femenino" },
  { id: "112", name: "Katherine Reyes", passes: 1, table: 14, gender: "femenino" },
  { id: "113", name: "Edwin y Astrid", passes: 2, table: 16, gender: "mixto" },
  { id: "114", name: "Alvaro y Any", passes: 2, table: 9, gender: "mixto" },
  { id: "115", name: "Samuel", passes: 1, table: 13, gender: "mixto" },
  { id: "116", name: "Ronald", passes: 1, table: 20, gender: "masculino" }
];


document.addEventListener("DOMContentLoaded", () => {
  const queryParams = new URLSearchParams(window.location.search);
  const guestId = queryParams.get("id");
  const guest = guests.find(g => g.id === guestId);

  if (guest) {
    let invitationText = `¡${guest.name}, `;

    if (guest.passes === 1) {
      invitationText += guest.gender === "femenino" ? "estás invitada!" : "estás invitado!";
    } else {
      invitationText += guest.gender === "femenino" ? "están invitadas!" : "están invitados!";
    }

    document.getElementById('guest-name').textContent = invitationText;
    document.getElementById('passes').textContent = `${guest.passes} ${guest.passes === 1 ? 'pase' : 'pases'}`;
    document.getElementById('guest-table').textContent = guest.table;
  } else {
    document.getElementById('guest-name').textContent = `¡Invitado no encontrado!`;
    const invitationInfo = document.querySelector('.invitation-info-section');
    if (invitationInfo) invitationInfo.style.display = 'none';
  }
});

window.guests = guests;