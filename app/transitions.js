export default function () {
  this.transition(
    this.fromRoute('artist.search'),
    this.toRoute('artist.event'),
    this.fromRoute('region.search'),
    this.toRoute('region.event'),
    this.fromRoute('venue.search'),
    this.toRoute('venue.event'),
    this.use('fade'),
    this.reverse('fade')
  );

  this.transition(
    this.fromRoute('region.search'),
    this.toRoute('region.event'),
    this.use('fade')
  );

  this.transition(
    this.fromRoute('venue.search'),
    this.toRoute('venue.event'),
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

  this.transition(
    this.hasClass('toLeft-list'),
    this.use('toLeft')
  );

  this.transition(
    this.childOf('.liquid-bind-calendar-count'),
    this.use('toUp')
  );

  this.transition(
    this.hasClass('tracking-button-switch'),
    this.use('fade', { duration: 40 })
  );
}
