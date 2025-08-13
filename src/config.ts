export const heroVideoUrl = 'https://videos.pexels.com/video-files/856675/856675-uhd_2560_1440_25fps.mp4'

export const meeting = {
  title: 'Reunión semanal DTI',
  when: 'Miércoles 10:00–11:00',
  location: 'Sala de reuniones / Presencial',
  icsPath: '/meeting.ics'
}

export const pillars = [
  'Verificar',
  'Estandarizar',
  'Simplificar',
  'Minimalismo',
  'Usuarios externos',
  'Innovación',
  'Educar',
  'Sorprender',
]

export const alignment = {
  initiatives: ['Renovación Web', 'Canal Único', 'Paquete Forestal', 'Autoservicio'],
  pillars: ['Verificar', 'Estandarizar', 'Simplificar', 'Usuarios externos', 'Innovación', 'Educar', 'Sorprender'],
  // Mapa simple de contribución (true resalta celda)
  matrix: [
    // Renovación Web
    [true, true, true, true, true, true, true],
    // Canal Único
    [true, true, true, true, false, true, true],
    // Paquete Forestal
    [true, true, false, true, true, false, true],
    // Autoservicio
    [true, true, true, true, true, true, true],
  ]
} 