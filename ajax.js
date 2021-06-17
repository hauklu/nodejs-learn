
function ajax(method, url, data) {
  return new Promise((resolve, reject) => {
    let xhr
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest()
    } else {
      xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }

    if (method === 'get') {
      let d = '?'
      Object.keys(data).forEach((val, idx, arr) => {
        d += val + '=' + data[val] + '&'
      })
      d = d.slice(0, d.length - 1)
      xhr.open(method, `${url}${d}`, true)
      xhr.send()
    } else if (method === 'post') {
      let d = ''
      Object.keys(data).forEach((val, idx, arr) => {
        d += val + '=' + data[val] + '&'
      })
      d = d.slice(0, d.length - 1)
      xhr.open(method, url, true)
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
      xhr.send(d)
    }

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const res = xhr.responseText
        const JSONRes = JSON.parse(xhr.responseText)
        switch (JSONRes.code) {
          case 0:
            resolve(res)
            break
          case -1:
            reject(res)
            break
          default:
            reject(res)
            break
        }
      }
    }

  })
}




// module.exports = ajax
