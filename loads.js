const guests = [
  { id: "1", name: "Karla Melgar & Alfredo de la Rosa", passes: 3, table: 2, gender: "mixto" },
  { id: "2", name: "Familia Hurtado Campos", passes: 3, table: 2, gender: "mixto" },
  { id: "3", name: "Familia Martinez Hurtado", passes: 2, table: 6, gender: "mixto" },
  { id: "4", name: "Familia Hurtado Blanco", passes: 3, table: 2, gender: "mixto" },
  { id: "5", name: "Margarita Rodriguez de Zepeda", passes: 1, table: 2, gender: "femenino" },
  { id: "6", name: "Lubia Rodriguez y Familia", passes: 3, table: 6, gender: "mixto" },
  { id: "7", name: "Walter Hurtado", passes: 1, table: 21, gender: "masculino" },
  { id: "8", name: "Juan Hurtado", passes: 2, table: 21, gender: "masculino" },
  { id: "9", name: "Lester Rodriguez & Dallana", passes: 2, table: 21, gender: "mixto" },
  { id: "10", name: "Elvia Melgar de Castañeda", passes: 1, table: 21, gender: "femenino" },
  { id: "11", name: "Ricardo Soza", passes: 2, table: 21, gender: "masculino" },
  { id: "12", name: "Pablo Rosales & Kristhel Estrada de Rosales", passes: 2, table: 1, gender: "mixto" },
  { id: "13", name: "Gerson Ramirez & Diana Vanessa López González de Ramírez", passes: 2, table: 1, gender: "mixto" },
  { id: "14", name: "Viviana Mazariegos", passes: 1, table: 1, gender: "femenino" },
  { id: "15", name: "Carlos Cali & Kimberly Vasquez de Cali", passes: 2, table: 19, gender: "mixto" },
  { id: "16", name: "Emilsa Valdez & Allan Borrayo", passes: 2, table: 19, gender: "mixto" },
  { id: "17", name: "Byron Yojcom & Damaris Boche de Yojcom", passes: 2, table: 19, gender: "mixto" },
  { id: "18", name: "Nora Fernanda Ortiz", passes: 1, table: 1, gender: "femenino" },
  { id: "19", name: "Ervin José De León M.", passes: 1, table: 1, gender: "masculino" },
  { id: "20", name: "Gissell", passes: 2, table: 18, gender: "femenino" },
  { id: "21", name: "Majito de Pedroza", passes: 1, table: 18, gender: "femenino" },
  { id: "22", name: "Edgar Berges", passes: 1, table: 18, gender: "masculino" },
  { id: "23", name: "Brendy Cacao", passes: 1, table: 18, gender: "femenino" },
  { id: "24", name: "Fernando De Paz", passes: 1, table: 18, gender: "masculino" },
  { id: "25", name: "Adriana Miranda", passes: 1, table: 18, gender: "femenino" },
  { id: "26", name: "Alondara", passes: 1, table: 18, gender: "femenino" },
  { id: "27", name: "Velveth", passes: 1, table: 18, gender: "femenino" },
  { id: "28", name: "Alex", passes: 1, table: 18, gender: "masculino" },
  { id: "29", name: "Bryan Zuleta & Emilia", passes: 2, table: 1, gender: "mixto" },
  { id: "30", name: "Julio García & Adriana Batres", passes: 2, table: 19, gender: "mixto" },
  { id: "31", name: "Sharon Ulin & Carlos Ulin", passes: 2, table: 19, gender: "mixto" },
  { id: "32", name: "Wilson Cuyuch", passes: 2, table: 20, gender: "masculino" },
  { id: "33", name: "Karen Morales", passes: 1, table: 20, gender: "femenino" },
  { id: "34", name: "Doris Ruano", passes: 1, table: 20, gender: "femenino" },
  { id: "35", name: "Juan", passes: 1, table: 20, gender: "masculino" },
  { id: "36", name: "Gabriela", passes: 1, table: 20, gender: "femenino" },
  { id: "37", name: "Diego", passes: 1, table: 20, gender: "masculino" },
  { id: "38", name: "Luis & Esposa", passes: 2, table: 20, gender: "mixto" },
  { id: "39", name: "Kevin & Daniela", passes: 2, table: 20, gender: "mixto" },
  { id: "40", name: "Génesis Ramírez", passes: 1, table: 20, gender: "femenino" },
  { id: "41", name: "Brandish & Dallana", passes: 3, table: 4, gender: "mixto" },
  { id: "42", name: "Erasmo & Nuria", passes: 3, table: 4, gender: "mixto" },
  { id: "43", name: "Persy & Norma", passes: 3, table: 4, gender: "mixto" },
  { id: "44", name: "Persy Jr.", passes: 1, table: 4, gender: "masculino" },
  { id: "45", name: "Lorena najera & Marlon najera", passes: 2, table: 3, gender: "mixto" },
  { id: "46", name: "Clarissa Ramírez & Willian Orozco", passes: 2, table: 3, gender: "mixto" },
  { id: "47", name: "Marcela & Alejandro", passes: 2, table: 6, gender: "mixto" },
  { id: "48", name: "Baltazar & Dora", passes: 2, table: 3, gender: "mixto" },
  { id: "49", name: "Rudy & Marta", passes: 2, table: 5, gender: "mixto" },
  { id: "50", name: "Emily & Alex", passes: 2, table: 3, gender: "mixto" },
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