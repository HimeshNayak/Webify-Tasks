function sub(form) {
    const checks = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checks.length; i++) {
      checks[i].checked && improve.push(checks[i].value);
    }
    const obj = {
      name: form.name.value,
      email: form.email.value,
      age: form.age.value,
      role: form.role.value,
      Recommend: form.recommend.value,
    };
    console.log(obj);
    return false;
  }