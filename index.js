for (let counter = 1; counter <= 100; counter++) {
  const multiploTres = (counter % 3 === 0)
  const multiploCinco = (counter % 5 === 0)
  const multiploTresECinco = (counter % 3 === 0) && (counter % 5 === 0)
    if (multiploTresECinco) {
      console.log('fizz buzz')
    } else if (multiploTres) {
      console.log('fizz')
    } else if (multiploCinco) {
      console.log('buzz')
    } else {
      console.log(counter)
    }
}
