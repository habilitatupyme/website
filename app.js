/* ============================================================
   PREGUNTAS FRECUENTES: edita aquí los textos (question / answer).
   category: constitucion | modificacion | oficina-virtual | patente-municipal | certificado-digital
   serviceUrl: ruta interna del servicio (los botones se generan solos)
   ============================================================ */
const FAQ_DATA = [
  {
    id: "faq-1",
    category: "constitucion",
    question: "¿Realmente pueden crear mi empresa en 2 horas?",
    answer: "¡Sí! Nuestro proceso está optimizado para completar todos los trámites en menos de 2 horas hábiles. Esto incluye la redacción del estatuto, firmas de los documentos, el inicio de actividades y facturación. Solo necesitamos que nos proporciones la información básica de tu empresa a través de un formulario.",
    serviceUrl: "/empresa-en-un-dia"
  },
  {
    id: "faq-2",
    category: "constitucion",
    question: "¿Hay costos adicionales que no están incluidos?",
    answer: "Sí, la compra de la firma electrónica avanzada, la cual posee un valor de $950 aproximadamente. También puedes realizarlo ante notario, pero ese precio ronda los $10.000 y no posee ninguna diferencia de hacerlo en línea.",
    serviceUrl: "/empresa-en-un-dia"
  },
  {
    id: "faq-3",
    category: "constitucion",
    question: "¿Qué documentos necesito para empezar?",
    answer: "Solo tu cédula de identidad vigente y poseer la clave única, ya que el resto es solo completar formularios intuitivos, en donde se indicará específicamente lo necesario relativo a la empresa. ¡Es más siempre de lo que piensas!",
    serviceUrl: "/empresa-en-un-dia"
  },
  {
    id: "faq-4",
    category: "constitucion",
    question: "¿Qué pasa si tengo dudas durante el proceso?",
    answer: "Tendrás acceso directo a nuestro equipo vía WhatsApp, llamada telefónica y correo. Te mantenemos informado en cada paso y resolvemos todas tus dudas inmediatamente. Nuestro compromiso es que entiendas todo el proceso y te sientas seguro.",
    serviceUrl: "/empresa-en-un-dia"
  },
  {
    id: "faq-5",
    category: "constitucion",
    question: "¿Puedo cambiar información de mi empresa después?",
    answer: "Sí, pero los requieren trámites adicionales, como la protocolización de acuerdo de accionistas. Por eso es importante definir bien desde el inicio la razón social, giros, socios, representantes legales, entre otros. Te asesoramos para que tomes las mejores decisiones desde el principio, para que no tengas que incurrir en esos gastos si es que no son necesarios.",
    serviceUrl: "/empresa-en-un-dia"
  },
  {
    id: "faq-6",
    category: "constitucion",
    question: "¿Ofrecen garantía de devolución?",
    answer: "¡Por supuesto! Puede solicitar la devolución completa o parcial del servicio dependiendo de qué proceso nos encontremos y las razones de la decisión. Poseemos satisfacción garantizada ☺️.",
    serviceUrl: "/empresa-en-un-dia"
  },
  {
    id: "faq-7",
    category: "constitucion",
    question: "¿Puedo empezar a facturar inmediatamente?",
    answer: "Con nuestro servicio de Empresa Esencial y Empresa Completa sí. Ambos Incluyen el inicio de actividades ante el SII y la habilitación para facturar, por lo que podrás emitir facturas electrónicas desde el primer día. Con el servicio Empresa Básica tendrías que contratar la habilitación aparte.",
    serviceUrl: "/empresa-en-un-dia"
  },
  {
    id: "faq-8",
    category: "modificacion",
    question: "¿Cuánto tiempo demora modificar los estatutos de mi empresa?",
    answer: "El proceso completo toma entre 24 a 48 horas hábiles si utilizas nuestro notario en línea también. Esto incluye la redacción de documentos, trámites notariales, actualización en el portal RES, notificación al SII y posterior aprobación. Te mantenemos informado en cada paso del proceso.",
    serviceUrl: "/modificacion-de-estatutos"
  },
  {
    id: "faq-9",
    category: "modificacion",
    question: "¿Es obligatorio modificar los estatutos cuando cambia algo en mi empresa?",
    answer: "Sí, es obligatorio por ley. Si deseas cambias socios, capital, giro comercial, razón social y/o dirección, por mencionar algunos, debes actualizar los estatutos. No hacerlo puede resultar en multas y problemas legales.",
    serviceUrl: "/modificacion-de-estatutos"
  },
  {
    id: "faq-10",
    category: "modificacion",
    question: "¿Qué incluye el precio? ¿Hay costos adicionales?",
    answer: "Nuestros dos servicios incluyen un servicio profesional de análisis, redacción, actualizaciones y notificación al SII. Dependiendo del tipo de empresa pueden aplicar costos en notaría, en los que si contratas el servicio completo se encuentran cubiertos. Si decides hacerlo presencialmente el valor ronda entre los $35.000 y los $50.000.",
    serviceUrl: "/modificacion-de-estatutos"
  },
  {
    id: "faq-11",
    category: "modificacion",
    question: "¿Qué documentos necesito para modificar los estatutos?",
    answer: "Cada socio debe contar con su cédula de identidad vigente y haber creado su sociedad bajo la modalidad del Empresa en un día. Se recomienda tener la clave única para agilizar los procesos de firma. Nosotros te guiamos sobre qué documentos específicos pueden aplican diferentes, dependiendo de tu empresa.",
    serviceUrl: "/modificacion-de-estatutos"
  },
  {
    id: "faq-12",
    category: "modificacion",
    question: "¿Puedo seguir operando mi empresa durante la modificación?",
    answer: "¡Por supuesto! Tu empresa puede seguir operando normalmente durante todo el proceso de modificación. Los cambios entran en vigencia una vez completados todos los trámites oficiales.",
    serviceUrl: "/modificacion-de-estatutos"
  },
  {
    id: "faq-13",
    category: "modificacion",
    question: "¿Qué pasa si no modifico los estatutos cuando es necesario?",
    answer: "Puedes enfrentar multas del SII u otras instituciones, problemas para acceder a créditos, dificultades en trámites comerciales, y conflictos legales. Es importante mantener los estatutos actualizados para operar sin riesgos.",
    serviceUrl: "/modificacion-de-estatutos"
  },
  {
    id: "faq-14",
    category: "modificacion",
    question: "¿Todos los socios deben estar de acuerdo para modificar los estatutos?",
    answer: "Depende del tipo de modificación y lo que establezcan tus estatutos actuales. Generalmente se requiere mayoría o unanimidad según el caso. Te asesoramos sobre los requisitos específicos para tu situación.",
    serviceUrl: "/modificacion-de-estatutos"
  },
  {
    id: "faq-15",
    category: "modificacion",
    question: "¿Ofrecen garantía en el servicio?",
    answer: "Sí, garantizamos que tu modificación será procesada correctamente y en el tiempo prometido. Si hay algún error de nuestra parte, lo corregiremos sin costo adicional.",
    serviceUrl: "/modificacion-de-estatutos"
  },
  {
    id: "faq-16",
    category: "modificacion",
    question: "¿Puedo hacer múltiples cambios en una sola modificación?",
    answer: "¡Absolutamente! Es más eficiente y económico hacer todos los cambios necesarios en una sola modificación. Con cualquiera de los 2 servicios aplican las mismas condiciones.",
    serviceUrl: "/modificacion-de-estatutos"
  },
  {
    id: "faq-17",
    category: "modificacion",
    question: "¿Recibo algún documento que compruebe los cambios?",
    answer: "Sí, recibes todos los documentos oficiales: estatuto actualizado, certificado de vigencia actualizado, protocolización del acuerdo de accionistas (si es que aplica) y comprobante de notificación al SII. Todo en formato digital.",
    serviceUrl: "/modificacion-de-estatutos"
  },
  {
    id: "faq-18",
    category: "oficina-virtual",
    question: "¿Qué es exactamente una dirección tributaria?",
    answer: "Es la dirección oficial de tu empresa que usas en todos los documentos legales. Es como la dirección de tu casa, pero para tu negocio. El SII, la municipalidad y otros organismos la usan para enviarte correspondencia oficial y poder ubicarte.",
    serviceUrl: "/oficina-virtual"
  },
  {
    id: "faq-19",
    category: "oficina-virtual",
    question: "¿Es completamente legal usar esta dirección?",
    answer: "¡Absolutamente! Es una dirección física real en Santiago centro. Cumple con todos los requisitos legales del SII y municipalidades. Miles de empresas usan este tipo de servicios sin ningún problema.",
    serviceUrl: "/oficina-virtual"
  },
  {
    id: "faq-20",
    category: "oficina-virtual",
    question: "¿Puedo usar esta dirección para todos mis trámites?",
    answer: "Sí, puedes usarla para crear tu empresa, obtener patente comercial, trámites SII, contratos, facturas, y cualquier documento oficial. Es una dirección completamente válida para todos los propósitos comerciales.",
    serviceUrl: "/oficina-virtual"
  },
  {
    id: "faq-21",
    category: "oficina-virtual",
    question: "¿Cuánto demora en estar lista mi dirección?",
    answer: "Máximo 2 horas hábiles. Una vez que contratas el servicio, inmediatamente se procede con la redacción del contrato de arriendo para que puedas usarla lo antes posible. Te enviamos todos los documentos de respaldo por email y WhatsApp.",
    serviceUrl: "/oficina-virtual"
  },
  {
    id: "faq-22",
    category: "oficina-virtual",
    question: "¿Hay costos adicionales?",
    answer: "Sí, el valor y tipo de firma que decidas utilizar. Si usas la recomendada tiene un valor de $950, mientras que, si es ante notario, el valor puede rondar entre los $3.000 y $10.000, en donde se debe coordinar la firma presencial.",
    serviceUrl: "/oficina-virtual"
  },
  {
    id: "faq-23",
    category: "oficina-virtual",
    question: "¿Qué pasa con mi correspondencia?",
    answer: "Recibimos toda tu correspondencia oficial y te notificamos inmediatamente por WhatsApp con foto del documento. Puedes pasar a retirarla o solicitar que te la enviemos físicamente (costo adicional).",
    serviceUrl: "/oficina-virtual"
  },
  {
    id: "faq-24",
    category: "oficina-virtual",
    question: "¿Puedo cambiar mi dirección después?",
    answer: "Sí, no quedas restringido a tener que siempre usar esta dirección. Podemos ayudarte con el cambio sin costo adicional.",
    serviceUrl: "/oficina-virtual"
  },
  {
    id: "faq-25",
    category: "oficina-virtual",
    question: "¿Qué pasa cuando se vence mi servicio?",
    answer: "Puedes renovar mensualmente o elegir un servicio, como lo prefieras. Si no renuevas, tienes 15 días para cambiar tu dirección tributaria en el SII antes de que dejemos de recibir correspondencia y notifiquemos directamente a las entidades de que ya no es una dirección válida",
    serviceUrl: "/oficina-virtual"
  },
  {
    id: "faq-26",
    category: "oficina-virtual",
    question: "¿Necesito algún documento especial para usar esta dirección?",
    answer: "No necesitas documentos especiales. Te proporcionamos el contrato de arriendo válido para presentar ante cualquier entidad.",
    serviceUrl: "/oficina-virtual"
  },
  {
    id: "faq-27",
    category: "oficina-virtual",
    question: "¿Qué incluye exactamente el servicio?",
    answer: "Contrato de arriendo de una dirección física real (usada de forma virtual), recepción de correspondencia, notificaciones por WhatsApp o email, soporte y respaldo legal. Todo lo necesario para operar legalmente.",
    serviceUrl: "/oficina-virtual"
  },
  {
    id: "faq-28",
    category: "patente-municipal",
    question: "¿Qué es exactamente una patente municipal?",
    answer: "Es el permiso oficial otorgado por la municipalidad que te autoriza a operar tu negocio legalmente dentro de la comuna: si formalizas es tu responsabilidad tener patente comercial.",
    serviceUrl: "/patente-municipal"
  },
  {
    id: "faq-29",
    category: "patente-municipal",
    question: "¿Por qué necesito una patente municipal?",
    answer: "Porque es obligatoria por ley para que tu negocio pueda ejercer sus actividades. Sin ella te arriesgas a multas, clausuras y limitaciones en trámites como la facturación.",
    serviceUrl: "/patente-municipal"
  },
  {
    id: "faq-30",
    category: "patente-municipal",
    question: "¿Cuánto tiempo demora el proceso?",
    answer: "Depende del servicio que elijas, ya que en el Básico la gestión es a través de la plataforma de la municipalidad, la cual tiene una revisión promedio de entre 7 a 30 días, los cuales se pueden extender si hay mucha carga de solicitudes. En cambio, en el Servicio Completo, que es el más popular, dependerá de cuándo haya días disponibles en la plataforma: si hay fecha para el mismo día, el mismo día vamos y podríamos tener tu patente comercial enseguida.",
    serviceUrl: "/patente-municipal"
  },
  {
    id: "faq-31",
    category: "patente-municipal",
    question: "¿Qué documentos necesito?",
    answer: "El estatuto actualizado, el inicio de actividades y tu cédula de identidad vigente. Dependiendo del tipo de actividades por las cuales quieras gestionar tu patente comercial puede que necesitemos la resolución sanitaria.",
    serviceUrl: "/patente-municipal"
  },
  {
    id: "faq-32",
    category: "patente-municipal",
    question: "¿Puedo hacer el trámite yo mismo?",
    answer: "Sí, solo tendrías que reunir todos los documentos solicitados por la municipalidad. Nosotros sabemos dónde encontrarlos para agilizar todo el proceso.",
    serviceUrl: "/patente-municipal"
  },
  {
    id: "faq-33",
    category: "patente-municipal",
    question: "¿Qué pasa si me rechazan la patente?",
    answer: "Antes de presentar revisamos todo a fondo para reducir la probabilidad de rechazo. Si ocurre, corregiremos lo señalado por la municipalidad y realizaremos el proceso nuevamente sin costo adicional.",
    serviceUrl: "/patente-municipal"
  },
  {
    id: "faq-34",
    category: "certificado-digital",
    question: "¿Qué es exactamente un certificado digital?",
    answer: "Es como tu carnet de identidad, pero para el mundo digital. Te permite firmar documentos tributarios por internet de forma 100% segura y legal, como si fuera tu firma manuscrita.",
    serviceUrl: "/certificado-digital"
  },
  {
    id: "faq-35",
    category: "certificado-digital",
    question: "¿Es realmente seguro? ¿Pueden falsificar mi firma?",
    answer: "¡Súper seguro! Es imposible falsificar porque usa la misma tecnología que los bancos. Cada certificado es único y está protegido con códigos que solo tú conoces.",
    serviceUrl: "/certificado-digital"
  },
  {
    id: "faq-36",
    category: "certificado-digital",
    question: "¿Es difícil de usar? No soy muy bueno con la tecnología",
    answer: "¡Para nada! Si sabes usar WhatsApp, sabes usar un certificado digital. Solo se debe centralizar y ya estarás listo para utilizar. Te ofrecemos asistencia personalizada si es necesario.",
    serviceUrl: "/certificado-digital"
  },
  {
    id: "faq-37",
    category: "certificado-digital",
    question: "¿Cuánto demora en estar listo?",
    answer: "El envío a tu correo electrónico tarda máximo 1 día hábil. Normalmente en 4-6 horas ya lo tendrás disponible. Una vez que lo descargues y centralices podrás comenzar a utilizarlo enseguida.",
    serviceUrl: "/certificado-digital"
  },
  {
    id: "faq-38",
    category: "certificado-digital",
    question: "¿Hay costos adicionales o sorpresas?",
    answer: "Cero sorpresas. El precio que ves incluye TODO: el certificado digital y la asistencia personalizada. No hay costos ocultos ni pagos adicionales.",
    serviceUrl: "/certificado-digital"
  },
  {
    id: "faq-39",
    category: "certificado-digital",
    question: "¿Puedo usarlo en mi celular o tablet?",
    answer: "No podrás instalarlo en esos dispositivos, pero sí hacer su uso si ya lo tienes centralizado. Recomendamos que la primera descarga se realice en un computador.",
    serviceUrl: "/certificado-digital"
  },
  {
    id: "faq-40",
    category: "certificado-digital",
    question: "¿Qué pasa si se me olvida la contraseña?",
    answer: "Tendrías que comprar un nuevo certificado digital, ya que no se puede restablecer. Mantén tu contraseña en un lugar seguro y protegida en caso de olvido.",
    serviceUrl: "/certificado-digital"
  },
  {
    id: "faq-41",
    category: "certificado-digital",
    question: "¿Qué pasa cuando se vence mi certificado?",
    answer: "Puedes renovarlo con cualquier entidad que emita certificados digitales, nosotros somos 1 de ellas ☺️.",
    serviceUrl: "/certificado-digital"
  },
  {
    id: "faq-42",
    category: "certificado-digital",
    question: "¿Qué incluye la asistencia personalizada?",
    answer: "Incluye ayuda por WhatsApp, teléfono o email siempre que tengas dudas. Te ayudamos con la descarga, instalación y centralización.",
    serviceUrl: "/certificado-digital"
  },
  {
    id: "faq-43",
    category: "certificado-digital",
    question: "¿Qué pasa si se me daña el computador?",
    answer: "Recomendamos tener respaldado tu certificado digital en alguna nube o que te lo reenvíes por correo. No se puede reemitir.",
    serviceUrl: "/certificado-digital"
  }
];
var PH="56956795885",EM="contacto@habilitatupyme.cl",MAP="https://maps.app.goo.gl/7Sz8qhBkikhFY5Fv8";
/* En Vercel (dominio propio) usa rutas limpias; en la vista previa de Claude usa #hash. */
var PATHMODE=location.protocol.indexOf("http")==0&&!/claude|anthropic/i.test(location.hostname);
var PATHS={"inicio":"","constitucion-empresa":"empresa-en-un-dia","modificacion-estatutos":"modificacion-de-estatutos","oficina-virtual":"oficina-virtual","patente-municipal":"patente-municipal","certificado-digital":"certificado-digital","preguntas-frecuentes":"preguntas-frecuentes","blog":"blog","terminos-y-condiciones":"terminos-y-condiciones","informacion-legal":"informacion-legal"};
var SLUG={};Object.keys(PATHS).forEach(function(k){SLUG[PATHS[k]]=k});SLUG["constitucion-empresa"]="constitucion-empresa";SLUG["modificacion-estatutos"]="modificacion-estatutos";SLUG["inicio"]="inicio";
function hr(k){return k=="inicio"?(PATHMODE?"/":"#inicio"):(PATHMODE?"/":"#")+PATHS[k]}
function A(k,t,c){return'<a'+(c?' class="'+c+'"':"")+' href="'+hr(k)+'" data-r="'+k+'">'+t+'</a>'}
function wa(t){return"https://wa.me/"+PH+"?text="+encodeURIComponent(t)}
function cta(t){return'<a class="btn bo" target="_blank" rel="noopener" href="'+wa(t)+'">Iniciar Asesoría Gratuita</a>'}
function ic(k){var p={doc:'<path d="M6 3h8l4 4v14H6z M14 3v4h4 M9 12h6 M9 16h6"/>',edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/>',pin:'<path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',lic:'<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 11h4 M7 14h8"/>',key:'<circle cx="8" cy="12" r="4"/><path d="M12 12h9 M18 12v3"/>',bulb:'<path d="M12 3a6 6 0 0 0-3 11v3h6v-3a6 6 0 0 0-3-11z M10 20h4"/>',more:'<circle cx="6" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/>'};return'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="color:var(--ac)">'+(p[k]||p.more)+'</svg>'}
var LOGO='<svg width="46" height="46" viewBox="0 0 46 46"><path d="M23 3a14 14 0 0 0-8 25.5V33h16v-4.5A14 14 0 0 0 23 3z" fill="#ff6600"/><rect x="16" y="35" width="14" height="3" rx="1.5" fill="#ff6600"/><rect x="19" y="40" width="8" height="3" rx="1.5" fill="#ff6600"/><path d="M15 15l6 7 11-12" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><div><span>Habilita</span><b>tu PYME</b></div>';
var MENU='<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>';
var S={
"constitucion-empresa":{n:"Constitución de empresas",i:"doc",price:"Desde $35.000",t:"Creación y Constitución de Empresas en Chile: Cómo formalizar tu negocio con éxito",d:"Constitución de empresas en Chile (SpA, EIRL y SRL) con asesoría gratuita y empresa lista para operar ante el SII.",lead:"",intro:"Formaliza tu negocio de forma rápida y segura. Te acompañamos con asesoría inicial 100% gratuita para constituir tu empresa lista para operar.",ps:["¿Cómo formalizarse en Chile correctamente? Emprender de forma legal no tiene por qué ser un proceso complejo. En Habilita tu PYME te brindamos una <b>asesoría preliminar 100% gratuita</b> para evaluar tu proyecto antes de realizar cualquier trámite. Analizamos si te conviene una <b>Sociedad por Acciones (SpA), una EIRL o una Sociedad Limitada</b>, explicando con claridad el impacto tributario de cada una. Nuestro objetivo es que conozcas cada paso con total claridad para luego delegar en nosotros la constitución en “<b>Empresa en un Día</b>”, el <b>inicio de actividades ante el SII</b> y la habilitación completa para facturar. Da el salto de la informalidad a una estructura empresarial sólida que te permita contratar con proveedores, postular a financiamientos bancarios y <b>proteger tu patrimonio personal</b>."],w:"Hola Habilita tu PYME, necesito asesoría gratuita para crear mi empresa desde cero."},
"modificacion-estatutos":{n:"Modificación de estatutos",i:"edit",price:"Desde $60.000 + IVA",t:"Modificación de Sociedades y Estatutos en Chile",d:"Modificar SpA, EIRL o SRL: giro, representante legal, socios, capital y transformación de sociedades, con diagnóstico inicial gratuito.",lead:"",intro:"Actualiza los estatutos de tu sociedad creada por Empresa en un día de manera ágil y completamente en línea. Respaldamos tu crecimiento empresarial sin errores.",ps:["Modificaciones en <b>Empresa en un Día</b> sin complicaciones. Las empresas crecen, cambian de rumbo y se adaptan. Si necesitas actualizar la estructura legal de tu sociedad actual (SpA, EIRL o SRL), no dejes este trámite en manos de plantillas genéricas que puedan generarte rechazos ante el Servicio de Impuestos Internos (SII) o los bancos. Te ofrecemos un <b>diagnóstico inicial gratuito</b> para revisar tus estatutos actuales. Realizamos todo tipo de actuaciones legales en línea con máxima agilidad: ampliación o modificación de giro u objeto social, cambio de representante legal, compraventa y cesión de acciones, ingresos o salida de socios, aumentos de capital, cesión de derechos sociales, modificación de facultades de la administración o transformación completa de sociedades (como pasar de EIRL a SpA) y <b>pasa de SpA a EIRL para que te puedas acoger a la Microempresa Familiar (MEF)</b>. Actualiza tu empresa con el respaldo técnico que tu negocio necesita para seguir escalando."],w:"Hola Habilita tu PYME, necesito una asesoría para modificar los estatutos de mi sociedad."},
"oficina-virtual":{n:"Oficina virtual",i:"pin",price:"Desde $25.000 + IVA",t:"Oficina Virtual: dirección tributaria y comercial",d:"Dirección autorizada ante el SII para tu empresa.",lead:"Dirección tributaria y comercial autorizada por el SII en Santiago Centro. Contrato de arriendo inmediato para tu inicio de actividades y patentes.",ps:["Obtén un domicilio válido para el inicio de actividades y la facturación, con recepción de correspondencia y presencia comercial formal."],b:["Dirección autorizada ante el SII","Domicilio comercial para tu sociedad","Apoyo con el trámite de inicio de actividades"],w:"Hola Habilita tu PYME, necesito información para contratar una dirección comercial y tributaria."},
"patente-municipal":{n:"Patente municipal",i:"lic",price:"Desde $20.000 + IVA",t:"Tramitación de patente municipal comercial",d:"Asesoría y trámite de patente municipal.",lead:"Tramitación, guía y obtención de tu patente comercial definitiva ante la municipalidad correspondiente.",ps:["Revisamos los requisitos según tu comuna y tu actividad, preparamos los antecedentes y acompañamos la solicitud."],b:["Revisión de requisitos por comuna","Preparación de antecedentes","Seguimiento del trámite"],w:"Hola Habilita tu PYME, necesito asesoría con la Patente Municipal."},
"certificado-digital":{n:"Certificado digital",i:"key",price:"Desde $11.000 + IVA",t:"Certificado digital: adquisición e instalación",d:"Certificado digital para el SII, enviado a tu correo.",lead:"Firma electrónica obligatoria para la emisión ilimitada de facturas y documentos tributarios en el portal del SII.",ps:["Te enviamos el certificado digital a tu correo electrónico para que completes el proceso de descarga y centralización y puedas usarlo en tus trámites ante el SII."],b:["Envío del certificado digital a tu correo","Descarga y centralización a cargo del cliente","Uso en trámites del SII"],w:"Hola Habilita tu PYME, necesito adquirir un Certificado Digital."}};
var OF={"constitucion-empresa":["<b>Asesoría preliminar experta</b> 100% gratuita para definir tu estructura jurídica.","<b>Redacción y constitución</b> de la sociedad en la plataforma Empresa en un Día.","<b>Inscripción y obtención del RUT</b> de la empresa ante el SII.","<b>Inicio de Actividades</b> y acreditación para emisión de facturas electrónicas.","<b>Soporte personalizado</b> por un experto de principio a fin del proceso."],
"modificacion-estatutos":["<b>Diagnóstico y revisión inicial gratuita</b> de tus estatutos actuales.","<b>Redacción del borrador</b> del acta de modificación según tus nuevos requerimientos.","<b>Gestión completa del trámite digital</b> en el Registro de Empresas y Sociedades.","<b>Firma electrónica avanzada</b>, ingreso de glosas notariales y aviso correspondiente al SII.","<b>Acompañamiento experto</b> para actualizar giros, capital, socios o representantes legales."]};
var E1=["Redacción de estatutos de la constitución","Obtención de RUT","Inicio de actividades"],E2=E1.concat(["Emisión de e-RUT","Preparación de documentos","Habilitación para emitir boletas de ventas","Habilitación para facturar","Gestión de cuenta bancaria empresa"]),M=["Modificación de SpA, EIRL o SRL: razón social, representantes legales, domicilio comercial, capital, socios, transformación, administración, giro y objeto social","Acuerdo de accionistas","Notificación al SII incluida","Entrega de documentos en 1 día hábil (según disponibilidad de documentación)","El valor puede variar (reducido) según el tipo de modificación"],OV=["Recepción de documentación de la empresa","Recepción de fiscalizadores e inspectores","Notificación por correo y/o WhatsApp cada vez que recibas correspondencia o fiscalizaciones","Válida para tramitar patente en Santiago Centro (rubros compatibles)","Certificado de domicilio cuando lo necesites"],OVN=["No incluye la firma electrónica avanzada ($950); también puedes firmar ante notario, con costo asumido por el cliente"],PTN=["No incluye el pago de la patente municipal (se paga directo a la municipalidad)"],CD=["Firma de todos los documentos tributarios electrónicos","Compatible con el SII"];
var P={"constitucion-empresa":[{n:"Empresa Básica",s:"Creación + inicio de actividades",pr:35000,iva:0,f:E1},{n:"Empresa Esencial",s:"Creación + facturación esencial",pr:55000,f:E2,inc:["1 mes de oficina virtual (rubros compatibles)"],pop:1},{n:"Empresa Completa",s:"Creación + facturación completa",pr:75000,f:E2.concat(["Certificado digital SII 1 año","Asistencia en la primera facturación","Primera declaración de IVA (F29)"]),inc:["3 meses de oficina virtual (rubros compatibles)"]}],
"modificacion-estatutos":[{n:"Modificación de estatutos",s:"Gestión completa, 100% en línea",pr:60000,f:M},{n:"Modificación + Notario en línea",s:"Gestión + notario en línea, 100% digital",pr:100000,f:M.concat(["Firma de notario completamente en línea, de hasta 2 socios (si son más, se evalúa)"]),pop:1}],
"oficina-virtual":[{n:"Servicio Semestral",s:"Precio por 6 meses, ideal para empezar",pr:25000,old:40000,f:OV,inc:["1 mes de oficina virtual (valor mensual $8.000 + IVA)"],no:OVN},{n:"Servicio Anual",s:"Precio por 12 meses, mejor precio por mes",pr:40000,old:80000,f:OV,inc:["2 meses de oficina virtual (valor mensual $8.000 + IVA)"],no:OVN,pop:1}],
"patente-municipal":[{n:"Servicio Básico",s:"Gestión de tu patente en la comuna de Santiago",pr:20000,f:["Revisión completa de documentos y requisitos","Preparación de toda la documentación","Envío de solicitud de patente comercial en línea","Seguimiento del proceso hasta la aprobación","Confirmación del proceso e indicaciones para el pago","Duración del proceso: 7 a 30 días"],no:PTN.concat(["No incluye asistencia presencial"])},{n:"Servicio Completo",s:"Patente + asistencia presencial",pr:30000,f:["Revisión completa de documentos y requisitos","Preparación y presentación de toda la documentación","Solicitud de hora en la municipalidad","Ida presencial de nuestro asesor a la municipalidad","Confirmación del proceso e indicaciones para el pago","Duración del proceso: 1 a 7 días"],inc:["Asistencia presencial incluida"],no:PTN,pop:1}],
"certificado-digital":[{n:"Certificado 1 año",s:"Ideal para comenzar",pr:11000,f:CD.concat(["Vigencia de 1 año"])},{n:"Certificado 2 años",s:"Mayor duración sin invertir tanto",pr:18500,f:CD.concat(["Vigencia de 2 años"]),inc:["Ahorro real frente a comprar año a año"]},{n:"Certificado 3 años",s:"Mayor duración, mejor precio",pr:19000,f:CD.concat(["Vigencia de 3 años"]),inc:["Ahorro real frente a comprar año a año","El mejor valor por año"],pop:1}]};
var RV=[{text:"Regularizó su empresa en una semana, acreditó su actividad y emitió su primera factura tras no lograrlo por su cuenta.",author:"Rodrigo Vásquez · Servicios VAV (Ñuñoa)"},{text:"Con la oficina virtual inició y verificó actividades, ya factura sin problemas y obtuvo su patente comercial definitiva en Santiago.",author:"Carmen Ruiz · Consultoría Ruiz San Martín (Santiago)"},{text:"Formalizó su empresa en menos de una semana, con guía paso a paso desde los estatutos hasta el inicio de actividades ante el SII.",author:"Cliente verificado de Habilita tu PYME"}];
var C={"constitucion-empresa":"Tu empresa te espera: comienza hoy","modificacion-estatutos":"Mantén tu empresa actualizada legalmente","oficina-virtual":"Obtén hoy tu dirección tributaria","patente-municipal":"Comienza hoy la gestión de tu patente comercial","certificado-digital":"Comienza a emitir documentos tributarios hoy"};
var WM={inicio:"Hola Habilita tu PYME, quiero asesoría comercial gratuita para mi PYME.","preguntas-frecuentes":"Hola Habilita tu PYME, tengo una consulta que no encontré en las preguntas frecuentes.",blog:"Hola Habilita tu PYME, quiero asesoría gratuita para mi emprendimiento.","terminos-y-condiciones":"Hola Habilita tu PYME, tengo una consulta sobre los términos y condiciones.","informacion-legal":"Hola Habilita tu PYME, tengo una consulta sobre su información legal."};
function msgFor(k){return S[k]?S[k].w:WM[k]}
function m(n){return"$"+String(n).replace(/\B(?=(\d{3})+(?!\d))/g,".")}
function li(a){return a.map(function(x){return"<li>"+x+"</li>"}).join("")}
function endcta(t,msg){return'<section class="alt"><div class="w"><div class="cbox"><h2>'+t+'</h2><p>Cuéntanos tu caso y un experto te orienta sin costo antes de que decidas.</p>'+cta(msg)+'</div></div></section>'}
/* Navbar, drawer y footer */
function hdr(k){var oth=["oficina-virtual","patente-municipal","certificado-digital"],on=function(x){return x==k?" on":""},h=document.getElementById("hd");h.className=k=="inicio"?"home":"";
h.innerHTML='<div class="w hw">'+A("inicio",LOGO,"logo")+'<nav class="nd">'+A("inicio","Inicio","nl"+on("inicio"))+A("constitucion-empresa","Creación de Empresas","nl"+on("constitucion-empresa"))+A("modificacion-estatutos","Modificación de Estatutos","nl"+on("modificacion-estatutos"))+'<div class="dd"><button class="nl'+(oth.indexOf(k)>-1?" on":"")+'" data-a="dd" aria-haspopup="true">Otros Servicios ▾</button><div class="dm">'+A("oficina-virtual","Oficina Virtual","nl"+on("oficina-virtual"))+A("patente-municipal","Patente Municipal","nl"+on("patente-municipal"))+A("certificado-digital","Certificado Digital","nl"+on("certificado-digital"))+'</div></div>'+A("blog","Blog","nl"+on("blog"))+'</nav><a class="btn bo cd" target="_blank" rel="noopener" href="'+wa(msgFor(k))+'">Iniciar Asesoría Gratuita</a><button class="hb" aria-label="Abrir menú" data-a="dr1">'+MENU+'</button></div>';
document.getElementById("dw").innerHTML='<button class="hb" style="display:flex;align-self:flex-end" aria-label="Cerrar menú" data-a="dr0"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg></button>'+A("inicio","Inicio","dl")+'<div class="sp">Servicios</div>'+A("constitucion-empresa","Creación de Empresas","dl")+A("modificacion-estatutos","Modificación de Estatutos","dl")+A("oficina-virtual","Oficina Virtual","dl")+A("patente-municipal","Patente Municipal","dl")+A("certificado-digital","Certificado Digital","dl")+'<div class="sp">Más</div>'+A("blog","Blog","dl")+A("preguntas-frecuentes","Preguntas frecuentes","dl")+'<a class="btn bo" style="margin-top:18px" target="_blank" rel="noopener" href="'+wa(msgFor(k))+'">Contacto: Iniciar Asesoría Gratuita</a>'}
function dr(o){document.body.classList.toggle("dro",!!o)}
function ftr(){document.getElementById("ft").innerHTML='<div class="w"><div class="ft"><div><h3>Habilita tu PYME</h3><p>Formalización y asesoría empresarial en todo Chile.</p><a href="'+MAP+'" target="_blank" rel="noopener">Estado #215, oficina 1110, Santiago Centro</a><p>Lun-Vie 09:00-18:00</p></div><div><h3>Servicios</h3>'+["inicio","constitucion-empresa","modificacion-estatutos","oficina-virtual","patente-municipal","certificado-digital"].map(function(k){return A(k,k=="inicio"?"Inicio":S[k].n)}).join("")+'</div><div><h3>Sitemap</h3>'+A("blog","Blog")+A("preguntas-frecuentes","Preguntas frecuentes")+A("terminos-y-condiciones","Términos y condiciones")+A("informacion-legal","Información legal")+'</div><div><h3>Contacto</h3><a href="https://wa.me/'+PH+'">WhatsApp +56 9 5679 5885</a><a href="mailto:'+EM+'">'+EM+'</a><a href="https://www.instagram.com/habilitatupyme" target="_blank" rel="noopener">Instagram</a><a href="https://www.linkedin.com/company/habilita-tu-pyme" target="_blank" rel="noopener">LinkedIn</a><a href="https://www.facebook.com/profile.php?id=61561669125582" target="_blank" rel="noopener">Facebook</a></div></div><p style="opacity:.7;margin-top:24px">© 2026 Habilita tu PYME. Todos los derechos reservados.</p></div>'}
/* Formulario de 3 pasos */
var W={s:1,tipo:"",need:"",rut:"",n:"",e:"",t:""};
var TIPOS=["Sociedad por Acciones (SpA)","Empresa Individual de Resp. Limitada (EIRL)","Sociedad de Resp. Limitada (Ltda.)","Aún no tengo empresa / Quiero emprender","Otro"];
function hasCo(){return TIPOS.slice(0,3).indexOf(W.tipo)>-1}
function needs(){return hasCo()?["Modificar estatutos","Iniciar actividades","Acreditar actividades","Contratar oficina virtual","Otro requerimiento"]:["Crear empresa desde cero (Empresa en un día)","Asesoría para empezar a formalizarme","Otro"]}
function fmtRut(v){v=v.replace(/[^0-9kK]/g,"").toUpperCase().slice(0,9);if(v.length<2)return v;return v.slice(0,-1).replace(/\B(?=(\d{3})+(?!\d))/g,".")+"-"+v.slice(-1)}
function msg(){return"Hola Habilita tu PYME, mi nombre es "+W.n+", quiero "+W.need.toLowerCase()+" para una empresa tipo "+W.tipo+(W.rut?" con RUT "+W.rut:"")+". Contactarme al "+W.t}
function wiz(){var h='<div class="dots">'+[1,2,3].map(function(i){return'<i class="'+(i<=W.s?"on":"")+'"></i>'}).join("")+'</div>';
if(W.s==1)h+='<h3>1. Tipo de empresa</h3>'+'<div class="og">'+TIPOS.map(function(x,i){return'<button class="opt'+(W.tipo==x?" s":"")+'" data-a="p1" data-v="'+i+'">'+ic(i==3?"bulb":i==4?"more":"doc")+x+'</button>'}).join("")+'</div>';
if(W.s==2){h+='<h3>2. ¿Qué necesitas resolver?</h3>'+'<div class="og">'+needs().map(function(x,i){return'<button class="opt'+(W.need==x?" s":"")+'" data-a="p2" data-v="'+i+'">'+x+'</button>'}).join("")+'</div>';
if(hasCo())h+='<label style="font-size:14px">RUT de la Empresa (opcional, para evaluación previa)</label><input id="rut" placeholder="XX.XXX.XXX-X" value="'+W.rut+'" data-i="rut">';
h+='<p id="wm" style="color:var(--cta);font-size:14px"></p><div class="ar"><button class="btn bk" data-a="back">Volver</button><button class="btn bn" data-a="nx">Continuar</button></div>'}
if(W.s==3)h+='<h3>3. Datos de contacto</h3><input placeholder="Nombre completo" value="'+W.n+'" data-i="n"><input type="email" placeholder="Correo electrónico" value="'+W.e+'" data-i="e"><input type="tel" placeholder="Teléfono" value="'+W.t+'" data-i="t"><p id="wm" style="color:var(--cta);font-size:14px"></p><div style="display:grid;gap:8px"><button class="btn bn" data-a="mail">Enviar por Correo</button><div class="ar"><button class="btn bk" data-a="back">Volver</button><button class="btn bo" data-a="wa">Hablar de inmediato por WhatsApp con mis datos</button></div></div>';
document.getElementById("wiz").innerHTML='<div class="stp">'+h+'</div>'}
function back(){if(W.s>1){W.s--;wiz()}}
function p1(i){if(W.tipo!=TIPOS[i]){W.tipo=TIPOS[i];W.need="";W.rut=""}W.s=2;wiz()}
function p2(i){W.need=needs()[i];wiz()}
function nx(){if(!W.need){document.getElementById("wm").textContent="Elige una opción para continuar.";return}W.s=3;wiz()}
function ok(){if(!W.n||!W.t){document.getElementById("wm").textContent="Completa tu nombre y teléfono.";return false}return true}
function sendWa(){if(ok())window.open(wa(msg()),"_blank")}
function sendMail(){if(!ok())return;if(!W.e){document.getElementById("wm").textContent="Agrega tu correo.";return}location.href="mailto:"+EM+"?subject="+encodeURIComponent("Solicitud web - "+W.need)+"&body="+encodeURIComponent(msg()+"\nCorreo: "+W.e)}
/* Páginas */
function sCard(k,main){var s=S[k];return'<a class="card'+(main?" fa":"")+'" href="'+hr(k)+'" data-r="'+k+'">'+(main?'<span class="tag">'+(k=="constitucion-empresa"?"Creación":"Modificación")+'</span>':ic(s.i))+'<h3'+(main?"":' style="margin-top:8px"')+'>'+s.n+'</h3><p>'+s.d+'</p><div class="pr" style="font-size:22px;margin-top:10px">'+s.price+'</div><span class="more">Ver servicio →</span></a>'}
function home(){var o=Object.keys(S).filter(function(k){return k!="constitucion-empresa"&&k!="modificacion-estatutos"});
return'<section class="hn" style="text-align:center"><div class="w"><h1>¿Qué necesita tu empresa hoy?</h1><p style="font-size:18px;max-width:640px;margin:0 auto">Cuéntanos en 3 simples pasos para entregarte una asesoría personalizada inmediata.</p><div id="wiz"></div></div></section>'+
'<section><div class="w"><h2 style="text-align:center;max-width:820px;margin:0 auto 10px"><b>Crea, constituye, formaliza y modifica</b> tu empresa <b>desde cualquier parte de Chile</b>.</h2><p style="text-align:center;color:var(--mu);max-width:720px;margin:0 auto 28px">Comenzamos siempre con una asesoría preliminar gratuita para que decidas con conocimiento y, después, delegues el trámite con un equipo experto.</p><div class="g2 mn" style="align-items:stretch">'+sCard("constitucion-empresa",1)+sCard("modificacion-estatutos",1)+'</div><div class="g3" style="margin-top:16px">'+o.map(function(k){return sCard(k)}).join("")+'</div></div></section>'+
'<section class="dk"><div class="w"><h2>Por qué confiar en nosotros</h2><div class="g3"><div class="card">'+ic("bulb")+'<h3>Experto humano</h3><p>Una persona real revisa y acompaña tu trámite.</p></div><div class="card">'+ic("doc")+'<h3>100% online</h3><p>Firma y gestiona desde cualquier región de Chile.</p></div><div class="card">'+ic("lic")+'<h3>Precios visibles</h3><p>Valores referenciales publicados en cada servicio.</p></div></div></div></section>'+endcta("Empieza con una asesoría gratuita",WM.inicio)}
function rvInit(){document.getElementById("rv").innerHTML=RV.map(function(r){return'<div class="card"><div class="stars">★★★★★</div><p>'+r.text+'</p><b>'+r.author+'</b></div>'}).join("")}
function rvGo(d){var e=document.getElementById("rv");if(e)e.scrollBy({left:d*340,behavior:"smooth"})}
function art(){return'<div class="ill"><svg width="180" height="160" viewBox="0 0 180 160" fill="none"><rect x="30" y="14" width="120" height="132" rx="12" fill="#fff" opacity=".95"/><rect x="46" y="34" width="60" height="8" rx="4" fill="#0B192C"/><rect x="46" y="54" width="88" height="6" rx="3" fill="#c5d3e3"/><rect x="46" y="68" width="76" height="6" rx="3" fill="#c5d3e3"/><path d="M46 112c10-14 16 8 26-6s14 4 22-4" stroke="#008DDA" stroke-width="3" stroke-linecap="round"/><circle cx="130" cy="120" r="20" fill="#FF6B35"/><path d="M121 120l7 7 12-14" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'}
function plan(k,p,ds){var v=p.iva===0?0:1,t="Hola Habilita tu PYME, quiero contratar el plan "+p.n+" de "+S[k].n+" ("+m(p.pr)+(v?" + IVA":"")+").";return'<div class="card pc'+(p.pop?" pop":"")+'" data-wa="'+wa(t)+'" '+(p.pop?' style="border-color:#FF6B35"':"")+'>'+(p.pop?'<span class="rb">★ Más popular</span>':"")+'<h3>'+p.n+'</h3><p>'+p.s+'</p><div><span class="pbox">'+(ds?"<small>Desde</small>":"")+m(p.pr)+(v?"<small>+ IVA</small>":"")+'</span></div>'+(p.old?'<p><s>'+m(p.old)+' + IVA</s> · Ahorras '+m(Math.round((p.old-p.pr)*1.19))+'</p>':"")+(v?'<p>Total: '+m(Math.round(p.pr*1.19))+'</p>':"")+'<ul class="ck">'+li(p.f)+'</ul>'+(p.inc?'<p><b>Incluido:</b></p><ul class="ck">'+li(p.inc)+'</ul>':"")+(p.no?'<p><b>Considera:</b></p><ul style="color:var(--mu);font-size:14px;padding-left:18px">'+li(p.no)+'</ul>':"")+'<a class="btn bo" target="_blank" rel="noopener" href="'+wa(t)+'">Quiero este servicio</a></div>'}
var TB=[["Soy Empresa en 1 Día",["RUT de la empresa.","Certificado de Estatutos Actualizado.","Claridad en los cambios que quieres realizar."]],["Soy Empresa Tradicional",["Escritura de Constitución.","Publicación en el Diario Oficial.","Inscripción en el Registro de Comercio del Conservador de Bienes Raíces (CBR)."]],["Quiero informar al SII",["RUT de la empresa.","Clave del SII.","Documentos resultantes del proceso de modificación legal."]]];
function tabs(){return'<section><div class="w"><h2>¿Qué documentos necesitamos para comenzar a modificar tu empresa?</h2><div class="tabs" role="tablist">'+TB.map(function(t,i){return'<button class="tb" role="tab" id="tb'+i+'" aria-selected="'+(i==0)+'" data-a="tab" data-v="'+i+'">'+t[0]+'</button>'}).join("")+'</div>'+TB.map(function(t,i){return'<div class="tp card'+(i==0?" on":"")+'" role="tabpanel" id="tp'+i+'"><ul class="ck">'+li(t[1])+'</ul></div>'}).join("")+'</div></section>'}
function tab(i){for(var j=0;j<3;j++){document.getElementById("tb"+j).setAttribute("aria-selected",j==i);document.getElementById("tp"+j).classList.toggle("on",j==i)}}
function svc(k){var s=S[k];return svcMain(k);
return'<section><div class="w g2"><div><span class="tag">'+s.n+'</span><h1>'+s.t+'</h1>'+(s.lead?'<p style="font-size:18px">'+s.lead+'</p>':"")+'<div class="pr">'+s.price+'</div><p>'+cta(s.w)+'</p></div>'+art()+'</div></section>'+
'<section class="alt"><div class="w g2" style="align-items:start"><div>'+(IMG[k]?'<div class="ph">'+IMG[k]+'</div>':"")+s.ps.map(function(p){return"<p>"+p+"</p>"}).join("")+'</div><div class="card"><h3>Qué Ofrecemos</h3><ul class="ck">'+li(OF[k]||s.b)+'</ul></div></div></section>'+
'<section><div class="w"><h2>Elige tu servicio</h2><p style="color:var(--mu)">Valores en pesos chilenos. El IVA se indica en cada plan.</p><div class="g3'+(P[k].length==2?" two":"")+'">'+P[k].map(function(p){return plan(k,p)}).join("")+'</div></div></section>'+endcta(C[k],s.w)}
var REQ={"constitucion-empresa":["Ser chileno o extranjero con residencia permanente o temporal vigente que permita realizar actividades lícitas.","Contar con ClaveÚnica activa.","Cédula de identidad chilena vigente.","Dispositivo con conexión a internet para realizar la firma electrónica del proceso."],"modificacion-estatutos":["Aplica exclusivamente para sociedades o empresas creadas bajo el Régimen Simplificado (plataforma Empresa en un Día).","Socios o accionistas deben ser chilenos o extranjeros con residencia permanente o temporal vigente.","Contar con ClaveÚnica activa.","Cédula de identidad chilena vigente.","Dispositivo con conexión a internet para realizar la firma electrónica del proceso."]};
function seg(i){for(var j=0;j<2;j++){document.getElementById("sb"+j).setAttribute("aria-selected",j==i);document.getElementById("sp"+j).classList.toggle("on",j==i)}}
function svcMain(k){var s=S[k];
return'<section class="hn"><div class="w"><span class="tag">'+s.n+'</span><h1>'+s.t+'</h1><p class="intro">'+(s.intro||s.lead)+'</p><p>'+cta(s.w)+'</p></div></section>'+
'<section><div class="w">'+(REQ[k]?'<div style="text-align:center"><div class="seg" role="tablist"><button class="tb" role="tab" id="sb0" aria-selected="true" data-a="seg" data-v="0">Planes y Servicios</button><button class="tb" role="tab" id="sb1" aria-selected="false" data-a="seg" data-v="1">Requisitos Obligatorios</button></div></div>':"")+
'<div class="sp on" id="sp0" style="margin-top:24px"><div class="g3'+(P[k].length==2?" two":"")+'">'+P[k].map(function(p){return plan(k,p,0)}).join("")+'</div><p style="color:var(--mu);font-size:14px;text-align:center;margin-top:14px">Valores en pesos chilenos. El IVA se indica en cada plan.</p></div>'+
(REQ[k]?'<div class="sp" id="sp1" style="margin-top:24px"><div class="card" style="max-width:720px;margin:0 auto"><h3>Los únicos requisitos son:</h3><ul class="ck">'+li(REQ[k])+'</ul></div></div>':"")+'</div></section>'+
'<section class="alt"><div class="w g2" style="align-items:start"><div>'+(IMG[k]?'<div class="ph">'+IMG[k]+'</div>':"")+s.ps.map(function(p){return"<p>"+p+"</p>"}).join("")+'</div><div class="card"><h3>Qué Ofrecemos</h3><ul class="ck">'+li(OF[k]||s.b)+'</ul></div></div></section>'+endcta(C[k],s.w)}
var IMG={"constitucion-empresa":'<svg viewBox="0 0 600 340" role="img" aria-label="Espacio de trabajo con laptop, café y gráfico de crecimiento"><defs><linearGradient id="gA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E8F4FD"/><stop offset="1" stop-color="#CFE9F8"/></linearGradient></defs><rect width="600" height="340" fill="url(#gA)"/><circle cx="520" cy="60" r="90" fill="#41C9E2" opacity=".18"/><circle cx="60" cy="300" r="110" fill="#008DDA" opacity=".12"/><rect x="0" y="262" width="600" height="78" fill="#0B192C"/><rect x="0" y="262" width="600" height="6" fill="#008DDA"/><rect x="150" y="84" width="270" height="168" rx="12" fill="#0B192C"/><rect x="162" y="96" width="246" height="144" rx="6" fill="#fff"/><rect x="176" y="110" width="70" height="8" rx="4" fill="#0B192C"/><rect x="176" y="126" width="110" height="6" rx="3" fill="#c5d3e3"/><path d="M180 214 L220 184 L252 198 L300 158 L338 170 L384 130" stroke="#008DDA" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="384" cy="130" r="7" fill="#FF6B35"/><rect x="310" y="106" width="76" height="40" rx="8" fill="#E8F4FD"/><path d="M324 128l8 8 16-18" stroke="#008DDA" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M120 252h330l-14 12H134z" fill="#1d3557"/><rect x="470" y="206" width="52" height="56" rx="8" fill="#fff"/><path d="M522 220h12a10 10 0 0 1 0 22h-12" stroke="#fff" stroke-width="6" fill="none"/><path d="M482 192c-6-10 6-14 0-24 M498 192c-6-10 6-14 0-24" stroke="#41C9E2" stroke-width="3" fill="none" stroke-linecap="round"/><rect x="470" y="206" width="52" height="10" rx="5" fill="#FF6B35"/><g transform="translate(60 150)"><path d="M30 0a30 30 0 0 0-16 55v18h32V55A30 30 0 0 0 30 0z" fill="#FF6B35"/><rect x="16" y="78" width="28" height="8" rx="4" fill="#FF6B35"/><path d="M16 30l10 12 20-24" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g></svg>',"modificacion-estatutos":'<svg viewBox="0 0 600 340" role="img" aria-label="Documento con firma electrónica y crecimiento estructurado"><defs><linearGradient id="gB" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#EAF3FB"/><stop offset="1" stop-color="#D3E8F7"/></linearGradient></defs><rect width="600" height="340" fill="url(#gB)"/><circle cx="90" cy="60" r="90" fill="#41C9E2" opacity=".18"/><circle cx="540" cy="300" r="110" fill="#008DDA" opacity=".12"/><g transform="rotate(-5 230 170)"><rect x="110" y="40" width="200" height="262" rx="12" fill="#fff" opacity=".6"/></g><rect x="130" y="34" width="220" height="276" rx="14" fill="#fff"/><rect x="152" y="58" width="104" height="10" rx="5" fill="#0B192C"/><rect x="152" y="80" width="170" height="7" rx="3.5" fill="#c5d3e3"/><rect x="152" y="96" width="150" height="7" rx="3.5" fill="#c5d3e3"/><rect x="152" y="112" width="176" height="7" rx="3.5" fill="#c5d3e3"/><rect x="152" y="128" width="120" height="7" rx="3.5" fill="#c5d3e3"/><rect x="152" y="152" width="170" height="44" rx="8" fill="#E8F4FD"/><path d="M164 176h14l8-14 10 26 8-18 10 6h16" stroke="#008DDA" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><line x1="152" y1="262" x2="318" y2="262" stroke="#9fb0c3" stroke-width="2"/><path d="M160 252c10-22 18-22 20-6s10 10 18-6 14 4 24-2 16-8 28-2" stroke="#0B192C" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="152" y="282" font-family="Montserrat,Arial,sans-serif" font-size="10" fill="#5a6b7d">Firma electrónica avanzada</text><circle cx="340" cy="86" r="26" fill="#FF6B35"/><path d="M327 86l9 9 16-19" stroke="#fff" stroke-width="5.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><g transform="translate(396 150)"><rect x="0" y="100" width="40" height="60" rx="6" fill="#41C9E2"/><rect x="54" y="68" width="40" height="92" rx="6" fill="#008DDA"/><rect x="108" y="30" width="40" height="130" rx="6" fill="#0B192C"/><path d="M10 80 L64 48 L118 8" stroke="#FF6B35" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M104 6l16 2-6 14" stroke="#FF6B35" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g></svg>'};
var cat="";
var FAQ_CATS=[["constitucion","Creación de Empresas"],["modificacion","Modificación de Empresas"],["oficina-virtual","Oficina Virtual"],["patente-municipal","Patente Municipal"],["certificado-digital","Certificado Digital"]];
function faq(){return'<section><div class="w"><h1>Preguntas frecuentes</h1><p style="color:var(--mu)">Elige el servicio que te interesa para ver sus preguntas.</p><div class="fcats" id="cat"></div><div id="fl"></div></div></section>'+endcta("¿No encuentras tu respuesta?",WM["preguntas-frecuentes"])}
function faqItem(x){var sl=SLUG[x.serviceUrl.replace(/^\//,"")]||"inicio";return'<details id="'+x.id+'"><summary>'+x.question+'</summary><p>'+x.answer+'</p><div class="fa-acts">'+A(sl,"Ir al servicio","btn bl sm")+'<a class="btn bo sm" target="_blank" rel="noopener" href="'+wa("Hola Habilita tu PYME, tengo una duda: "+x.question)+'">Consultar por WhatsApp</a></div></details>'}
function fl(){
document.getElementById("cat").innerHTML=FAQ_CATS.map(function(c){return'<button class="tb'+(c[0]==cat?" on":"")+'" aria-pressed="'+(c[0]==cat)+'" data-a="cat" data-v="'+c[0]+'">'+c[1]+'</button>'}).join("");
var out=document.getElementById("fl");
if(!cat){out.innerHTML="";return}
out.innerHTML=FAQ_DATA.filter(function(x){return x.category==cat}).map(faqItem).join("")}
function blog(){return'<section><div class="w" style="text-align:center;max-width:680px"><div class="ill" style="margin-bottom:24px">'+ic("bulb").replace("var(--ac)","#fff")+'</div><span class="tag">Blog</span><h1>Guías y tutoriales para emprender</h1><div class="card"><b>Sitio en construcción:</b> Pronto tendremos guías, ayudas y tutoriales preparados para potenciar tu negocio.</div><p>'+cta(WM.blog)+'</p></div></section>'}
function terms(){var t=[["1. Objeto","Habilita tu PYME presta servicios de asesoría y gestión de trámites de formalización empresarial en Chile."],["2. Contratación","El servicio se contrata por canales digitales. El alcance y el valor se confirman por escrito antes de iniciar."],["3. Precios","Los valores publicados son referenciales y pueden variar según el caso. Los montos señalados con IVA se incrementan en el impuesto vigente. No incluyen aranceles de terceros."],["4. Obligaciones del cliente","El cliente entrega información veraz y completa. Los plazos dependen de la entrega oportuna de los antecedentes."],["5. Plazos","Los plazos son estimados y dependen también de organismos públicos y de terceros."],["6. Datos personales","Los datos se tratan conforme a la normativa chilena de protección de datos personales y se usan para prestar el servicio."],["7. Claves tributarias","Durante el proceso de modificación y de inicio de actividades podemos solicitar tus claves tributarias, con el fin de proporcionar un servicio integral. Nuestro equipo las utilizará solo para completar lo contratado. Será responsabilidad del cliente cambiarlas posteriormente, si así lo desea, una vez finalizado el proceso."],["8. Garantía de satisfacción","Ofrecemos garantía de satisfacción: si incumplimos algún servicio ofrecido y este no se cumple dentro de lo esperado, se podrá devolver hasta la totalidad del dinero, o nos encargaremos de pagar a la institución que corresponda lo generado por la situación, o condonaremos deudas o pagos pendientes que existiesen con nosotros. Cada situación será revisada particularmente."],["9. Responsabilidad","Nuestra responsabilidad se limita a la correcta ejecución del servicio contratado."],["10. Ley aplicable","Estos términos se rigen por las leyes de Chile y por los tribunales competentes."]];return'<section><div class="w" style="max-width:780px"><h1>Términos y condiciones</h1><p style="color:var(--mu)">Texto base referencial. Debe ser revisado por un abogado antes de publicarse.</p>'+t.map(function(x){return"<h3>"+x[0]+"</h3><p>"+x[1]+"</p>"}).join("")+'</div></section>'+endcta("¿Dudas sobre estos términos?",WM["terminos-y-condiciones"])}
function legal(){return'<section><div class="w" style="max-width:780px"><h1>Transparencia e información legal</h1><p style="color:var(--mu)">Datos de la empresa que presta los servicios de este sitio.</p><dl class="lg"><dt>Razón social</dt><dd>HABILITA TU PYME SPA</dd><dt>RUT</dt><dd>77.940.415-3</dd><dt>Giro</dt><dd>SERVICIOS DE CREACIONES DE EMPRESAS, CONTABILIDAD Y RELACIONADOS</dd><dt>Dirección</dt><dd><a href="'+MAP+'" target="_blank" rel="noopener">Estado 215, oficina 1110, Santiago Centro</a></dd><dt>Correo</dt><dd><a href="mailto:'+EM+'">'+EM+'</a></dd><dt>Representante legal</dt><dd>Edgard Antonio Gutiérrez Araya</dd><dt>Cédula de identidad</dt><dd>18.480.092-6</dd></dl></div></section>'+endcta("¿Tienes alguna consulta?",WM["informacion-legal"])}
/* Router */
function cur(){var s=PATHMODE?location.pathname.replace(/^\/+|\/+$/g,""):location.hash.slice(1);return SLUG[s]||"inicio"}
function route(){var k=cur(),h,t="Habilita tu PYME | Crea, constituye, formaliza y modifica tu empresa en Chile",d="Creación de empresas, modificación de SpA, EIRL y SRL, oficina virtual, patente municipal y certificado digital en todo Chile, con asesoría gratuita.";
if(S[k]){h=svc(k);t=S[k].t+" | Habilita tu PYME";d=S[k].d}else if(k=="preguntas-frecuentes"){h=faq();t="Preguntas frecuentes | Habilita tu PYME"}else if(k=="blog"){h=blog();t="Blog | Habilita tu PYME"}else if(k=="terminos-y-condiciones"){h=terms();t="Términos y condiciones | Habilita tu PYME"}else if(k=="informacion-legal"){h=legal();t="Información legal | Habilita tu PYME"}else{h=home()}
document.getElementById("app").innerHTML=h;document.title=t;document.querySelector('meta[name=description]').content=d;
if(PATHMODE){var c=document.querySelector('link[rel=canonical]');if(!c){c=document.createElement("link");c.rel="canonical";document.head.appendChild(c)}c.href=location.origin+hr(k)}
document.getElementById("wfab").href=wa(msgFor(k));hdr(k);ftr();dr(0);
if(k=="inicio"){wiz()}if(k=="preguntas-frecuentes")fl();window.scrollTo(0,0)}
document.addEventListener("click",function(e){var a=e.target.closest?e.target.closest("a[data-r]"):null;
var pc=e.target.closest?e.target.closest("[data-wa]"):null;if(pc&&!e.target.closest("a")){window.open(pc.getAttribute("data-wa"),"_blank","noopener")}
if(a&&PATHMODE&&e.button===0&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey){e.preventDefault();history.pushState(null,"",a.getAttribute("href"));route()}
if(!(e.target.closest&&e.target.closest(".dd"))){var d=document.querySelector(".dd");if(d)d.classList.remove("open")}});
document.addEventListener("click",function(e){var el=e.target.closest?e.target.closest("[data-a]"):null;if(!el)return;var a=el.getAttribute("data-a"),v=el.getAttribute("data-v");var H={dr0:function(){dr(0)},dr1:function(){dr(1)},back:back,nx:nx,mail:sendMail,wa:sendWa,tab:function(){tab(+v)},seg:function(){seg(+v)},p1:function(){p1(+v)},p2:function(){p2(+v)},cat:function(){cat=v;fl()},dd:function(){el.parentNode.classList.toggle("open")},top:function(){window.scrollTo({top:0,behavior:"smooth"})}};if(H[a])H[a]()});
document.addEventListener("input",function(e){var t=e.target,k=t.getAttribute&&t.getAttribute("data-i");if(!k)return;if(k=="rut")t.value=W.rut=fmtRut(t.value);else if(k=="fl")fl();else W[k]=t.value});
addEventListener("hashchange",route);addEventListener("popstate",route);
addEventListener("scroll",function(){document.getElementById("top").classList.toggle("show",window.scrollY>300)});
route();
