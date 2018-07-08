function check(form)
  {
    if(form.userid.value == "tfiteam" && form.pswrd.value == "mergeintodiscovery")
    {
      window.open('https://powelltravis.github.io/submerge.io/submerge.html')
    }
    else
    {
        alert("The username or password you provided do not match")
    }
  }
