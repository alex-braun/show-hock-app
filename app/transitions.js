export default function () {
  this.transition(
    this.fromRoute('artist.search'),
    this.toRoute('artist.event'),
    this.use('fade')
  );
  this.transition(
    this.fromRoute('index'),
    this.fromRoute('artist'),
    this.fromRoute('region'),
    this.fromRoute('venue'),
    this.toRoute('searches'),
    this.use('toDown'),
    this.reverse('toUp')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('region'),
    this.use('fade'),
    this.reverse('fade')
  );
  this.transition(
    this.hasClass('toLeft-list'),
    this.use('toLeft')
  );

}
