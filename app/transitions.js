export default function () {
  this.transition(
    this.fromRoute('artist.search'),
    this.toRoute('artist.event'),
    this.use('fade')
    // this.debug()
  );
}
