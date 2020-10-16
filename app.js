var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  var box = document.getElementById('box')
  async function callapi()
  {
      let resp = await fetch("http://vossle.com/APIV2/ARexperience", requestOptions)
  let text = await resp.text()
  let jsonresp = JSON.parse(text)
  console.log(jsonresp.ARExperiences)
  let ele =[]
  for(i=0;i<jsonresp.ARExperiences.length;i++)
  {
      ele[i] = document.createElement('a-marker')
      const abcd = document.createElement('a-entity')
      ele[i].setAttribute('patt',jsonresp.ARExperiences[i].pattern_file)
      console.log(jsonresp.ARExperiences[i].content)
      abcd.setAttribute('gltf-model',`https://cors-anywhere.herokuapp.com/${jsonresp.ARExperiences[i].content}`)
      box.appendChild(ele[i])
      ele[i].appendChild(abcd)
  }
  ele.map(element=> 
    
  document.getElementsByName('a-scene')[0].appendChild(element)
  )
  }
  callapi()