const loads = [
  { id: "1", name: "Karla Melgar & Alfredo de la Rosa", passes: 3, table: 2 },
  { id: "2", name: "Familia Hurtado Campos", passes: 3, table: 2 },
  { id: "3", name: "Familia Martinez Hurtado", passes: 2, table: 6 },
  { id: "4", name: "Familia Hurtado Blanco", passes: 3, table: 2 },
  { id: "5", name: "Margarita Rodrigiuez de Zepeda", passes: 1, table: 2 },
  { id: "6", name: "Lubia Rodriguez y Familia", passes: 3, table: 6 },
  { id: "7", name: "Walter Hurtado", passes: 1, table: 21 },
  { id: "8", name: "Juan Hurtado", passes: 2, table: 21 },
  { id: "9", name: "Lester Rodriguez & Dallana", passes: 2, table: 21 },
  { id: "10", name: "Elvia Melgar de Castañeda", passes: 1, table: 21 },
  { id: "11", name: "Ricardo Soza", passes: 2, table: 21 },
  { id: "12", name: "Ronald & Esposa", passes: 1, table: 20 },
  { id: "13", name: "Pablo Rosales & Kristhel Estrada de Rosales", passes: 2, table: 1 },
  { id: "14", name: "Gerson Ramirez & Diana Vanessa López González de Ramírez", passes: 2, table: 1 },
  { id: "15", name: "Viviana Mazariegos", passes: 1, table: 1 },
  { id: "16", name: "Carlos Cali & Kimberly Vasquez de Cali", passes: 2, table: 19 },
  { id: "17", name: "Emilsa Valdez & Allan Borrayo", passes: 2, table: 19 },
  { id: "18", name: "Byron Yojcom & Damaris Boche de Yojcom", passes: 2, table: 19 },
  { id: "19", name: "Nora Fernanda Ortiz", passes: 1, table: 1 },
  { id: "20", name: "Ervin José De León M.", passes: 1, table: 1 },
  { id: "21", name: "Meli Alvarado & Awner Alarcón", passes: 2, table: 18 },
  { id: "22", name: "Gissell", passes: 2, table: 18 },
  { id: "23", name: "Majito de Pedroza", passes: 1, table: 18 },
  { id: "24", name: "Edgar Berges", passes: 1, table: 18 },
  { id: "25", name: "Brendy Cacao", passes: 1, table: 18 },
  { id: "26", name: "Fernando De Paz", passes: 1, table: 18 },
  { id: "27", name: "Adriana Miranda", passes: 1, table: 18 },
  { id: "28", name: "Alondara", passes: 1, table: 18 },
  { id: "29", name: "Velveth", passes: 1, table: 18 },
  { id: "30", name: "Alex", passes: 1, table: 18 },
  { id: "31", name: "Bryan Zuleta & Emilia", passes: 2, table: 1 },
  { id: "32", name: "Julio García & Adriana Batres", passes: 2, table: 19 },
  { id: "33", name: "Sharon Ulin & Carlos Ulin", passes: 2, table: 19 },
  { id: "34", name: "Wilson Cuyuch", passes: 2, table: 20 },
  { id: "35", name: "Karen Morales", passes: 1, table: 20 },
  { id: "36", name: "Doris Ruano", passes: 1, table: 20 },
  { id: "37", name: "Juan", passes: 1, table: 20 },
  { id: "38", name: "Gabriela", passes: 1, table: 20 },
  { id: "39", name: "Diego", passes: 1, table: 20 },
  { id: "40", name: "Luis & Esposa", passes: 2, table: 20 },
  { id: "41", name: "Kevin & Daniela", passes: 2, table: 20 },
  { id: "42", name: "Génesis Ramírez", passes: 1, table: 20 },
  { id: "43", name: "Brandish & Dallana", passes: 3, table: 4 },
  { id: "44", name: "Erasmo & Nuria", passes: 3, table: 4 },
  { id: "45", name: "Persy & Norma", passes: 3, table: 4 },
  { id: "46", name: "Persy Jr.", passes: 1, table: 4 },
  { id: "47", name: "Lorena Najera & Marlon Najera", passes: 2, table: 3 },
  { id: "48", name: "Clarissa Ramírez & Willian Orozco", passes: 2, table: 3 },
  { id: "49", name: "Marcela & Alejandro", passes: 2, table: 6 },
  { id: "50", name: "Baltazar & Dora", passes: 2, table: 3 },
  { id: "51", name: "Rudy & Marta", passes: 2, table: 5 },
  { id: "52", name: "Emily & Alex", passes: 2, table: 3 },
  { id: "53", name: "Ovidio Pivaral & Sesibel De Pivaral", passes: 2, table: 5 },
  { id: "54", name: "Jose & Yes", passes: 5, table: 11 },
  { id: "55", name: "Omar & Shirley", passes: 3, table: 3 },
  { id: "56", name: "Ana Leal", passes: 1, table: 11 },
  { id: "57", name: "Carlos & Carmen", passes: 2, table: 8 },
  { id: "58", name: "Everardo & Florency", passes: 3, table: 8 },
  { id: "59", name: "Pepe & Miriam", passes: 2, table: 8 },
  { id: "60", name: "Ani & Anita", passes: 2, table: 8 },
  { id: "61", name: "Hector & Sonia", passes: 2, table: 7 },
  { id: "62", name: "Gabriela", passes: 1, table: 7 },
  { id: "63", name: "Iris & Nancy", passes: 2, table: 7 },
  { id: "64", name: "Gerardo & Paty", passes: 3, table: 7 },
  { id: "65", name: "Karen", passes: 1, table: 7 },
  { id: "66", name: "Guillermo & Doris", passes: 4, table: 9 },
  { id: "67", name: "Marisol", passes: 2, table: 9 },
  { id: "68", name: "Hugo & Marcia", passes: 4, table: 9 },
  { id: "69", name: "Geova", passes: 1, table: 13 },
  { id: "70", name: "Luis Carlos", passes: 1, table: 13 },
  { id: "71", name: "Daniel", passes: 1, table: 13 },
  { id: "72", name: "Ever & Suly", passes: 4, table: 13 },
  { id: "73", name: "Josue & Ivy", passes: 2, table: 13 },
  { id: "74", name: "Carlitos & Mary", passes: 4, table: 15 },
  { id: "75", name: "Gabriel & Monica", passes: 2, table: 15 },
  { id: "76", name: "Keneth & Sheily", passes: 2, table: 15 },
  { id: "77", name: "Luigi & Majo", passes: 2, table: 10 },
  { id: "78", name: "Roberto & Maricela", passes: 2, table: 10 },
  { id: "79", name: "Madelyn", passes: 1, table: 10 },
  { id: "80", name: "Christian", passes: 1, table: 10 },
  { id: "81", name: "Aldo & Marelyn", passes: 2, table: 10 },
  { id: "82", name: "Percy & Bianca", passes: 2, table: 10 },
  { id: "83", name: "Hector & Maybelin", passes: 2, table: 12 },
  { id: "84", name: "Marito", passes: 1, table: 12 },
  { id: "85", name: "Gadiel & Sofi", passes: 2, table: 12 },
  { id: "86", name: "Mario & Brenda", passes: 2, table: 12 },
  { id: "87", name: "Cristian & Kathy", passes: 2, table: 12 },
  { id: "88", name: "Kathy Reyes", passes: 1, table: 12 },
  { id: "89", name: "Fernando", passes: 2, table: 14 },
  { id: "90", name: "Axel", passes: 1, table: 14 },
  { id: "91", name: "Selma", passes: 1, table: 14 },
  { id: "92", name: "Dalia", passes: 1, table: 14 },
  { id: "93", name: "Jacqueline", passes: 1, table: 14 },
  { id: "94", name: "Emilio & Katherine", passes: 2, table: 14 },
  { id: "95", name: "Ronald", passes: 1, table: 14 },
  { id: "96", name: "Sheerley", passes: 1, table: 16 },
  { id: "97", name: "Flor", passes: 1, table: 16 },
  { id: "98", name: "Jose & Kimo", passes: 2, table: 16 },
  { id: "99", name: "Carlos & Miriam", passes: 2, table: 16 },
  { id: "100", name: "Marcela", passes: 1, table: 16 },
  { id: "101", name: "Wendy", passes: 1, table: 16 },
  { id: "102", name: "Carlos Padilla", passes: 1, table: 16 },
  { id: "103", name: "Gabriela", passes: 1, table: 16 },
  { id: "104", name: "Carol", passes: 2, table: 17 },
  { id: "105", name: "Lucrecia", passes: 1, table: 17 },
  { id: "106", name: "Luz", passes: 1, table: 17 },
  { id: "107", name: "Mario & Esposa", passes: 2, table: 17 }
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