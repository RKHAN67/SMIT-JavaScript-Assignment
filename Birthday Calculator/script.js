console.log('hi rizwan')

 function calculateBirthday() {
      const birthdayInput = document.getElementById("birthday").value;
      const result = document.getElementById("result");

      if (!birthdayInput) {
        result.innerHTML = "Please select your birthday";
        return;
      }

      const today = new Date();
      const birthDate = new Date(birthdayInput);

      if (
        today.getDate() === birthDate.getDate() &&
        today.getMonth() === birthDate.getMonth()
      ) {
        result.innerHTML = "Happy Birthday";
        return;
      }

      let thisYearBirthday = new Date(
        today.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
      );

      const oneDay = 1000 * 60 * 60 * 24;

      let nextBirthday = thisYearBirthday;
      if (thisYearBirthday < today) {
        nextBirthday = new Date(
          today.getFullYear() + 1,
          birthDate.getMonth(),
          birthDate.getDate()
        );
      }

      const nextDays = Math.ceil((nextBirthday - today) / oneDay);

      let previousBirthday = thisYearBirthday;
      if (thisYearBirthday > today) {
        previousBirthday = new Date(
          today.getFullYear() - 1,
          birthDate.getMonth(),
          birthDate.getDate()
        );
      }

      const passedDays = Math.floor((today - previousBirthday) / oneDay);

      result.innerHTML = `
        Next Birthday remaining days: <b>${nextDays}</b><br>
        Previous Birthday passed days: <b>${passedDays}</b>
      `;
    }