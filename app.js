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
    answer: "¡Sí! La creación de tu empresa, que incluye la redacción del estatuto y la firma de los documentos, se completa en menos de 2 horas hábiles. El proceso completo, que incluye la habilitación para facturar (verificación de actividades ante el SII), puede tomar hasta 5 días hábiles. Solo necesitamos que nos proporciones la información básica de tu empresa a través de un formulario.",
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
    answer: "Con nuestro servicio de Empresa Esencial y Empresa Completa sí. Ambos incluyen el inicio de actividades ante el SII y la habilitación para facturar (verificación de actividades). Como el SII verifica el domicilio antes de habilitarte, el proceso completo puede tomar hasta 5 días hábiles. Para emitir facturas necesitas un certificado digital: viene incluido en Empresa Completa, pero no en Empresa Esencial. Con el servicio Empresa Básica tendrías que contratar la habilitación aparte.",
    serviceUrl: "/empresa-en-un-dia"
  },
  {
    id: "faq-8",
    category: "modificacion",
    question: "¿Cuánto tiempo demora modificar los estatutos de mi empresa?",
    answer: "En un escenario ideal, la modificación toma 48 horas hábiles. Esto incluye la redacción de documentos, firmas, trámites notariales y la actualización en el portal RES. A eso se suman unos 5 días hábiles para la notificación y actualización ante el SII, dependiendo del tipo de modificación. Si tu empresa es EIRL o SRL, al no requerir notario, podría quedar modificada en menos de 24 horas hábiles. Te mantenemos informado en cada paso del proceso.",
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
    answer: "Nuestros dos servicios incluyen un servicio profesional de análisis, redacción, actualizaciones y notificación al SII. Si tu empresa es SpA, se requiere notario: con el servicio que incluye notario en línea está cubierto para 1 accionista, y cada accionista adicional suma $5.000 + IVA. Si decides hacerlo presencialmente, el valor ronda entre los $35.000 y los $50.000. Las EIRL y SRL no requieren notario.",
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
    id: "faq-44",
    category: "modificacion",
    question: "¿Modifican empresas que no fueron creadas en Empresa en un Día?",
    answer: "No. Nuestro servicio de modificación es exclusivo para empresas creadas en Empresa en un Día (Registro de Empresas y Sociedades).",
    serviceUrl: "/modificacion-de-estatutos"
  },
  {
    id: "faq-45",
    category: "modificacion",
    question: "¿Necesito notario para modificar mi empresa?",
    answer: "Solo si tu empresa es SpA. Las Sociedades de Responsabilidad Limitada (SRL) y las Empresas Individuales de Responsabilidad Limitada (EIRL) no requieren notario: con nuestro servicio de gestión basta.",
    serviceUrl: "/modificacion-de-estatutos"
  },
  {
    id: "faq-46",
    category: "modificacion",
    question: "¿Cuánto cuesta el notario en línea?",
    answer: "Como referencia, suma $33.000 + IVA al valor de la gestión y considera 1 accionista. Por cada accionista adicional se suman $5.000 + IVA, y el valor final se confirma en la asesoría con tu ejecutivo. Algunos servicios tienen un valor promocional con notario incluido.",
    serviceUrl: "/modificacion-de-estatutos"
  },
  {
    id: "faq-47",
    category: "modificacion",
    question: "¿Qué modificaciones incluyen el aviso al SII?",
    answer: "El cambio de representante legal y el cambio de accionistas incluyen el aviso al SII, al igual que la transformación de una EIRL o SRL a SpA. La modificación de facultades y la de giro no lo incluyen por defecto: si quieres que actualicemos tus giros o actividades ante el SII, tiene un valor adicional de $20.000 + IVA ($23.800). La transformación de SpA a EIRL o SRL no requiere aviso posterior al SII.",
    serviceUrl: "/modificacion-de-estatutos"
  },
  {
    id: "faq-48",
    category: "modificacion",
    question: "¿Para qué sirve modificar las facultades de la administración?",
    answer: "Para que quien administra tu empresa pueda realizar las gestiones que necesita, como las que exigen ciertos bancos. Ajustamos las facultades bajo nuestra experiencia, incluyendo las que Empresa en un Día sugiere por defecto.",
    serviceUrl: "/modificacion-de-estatutos/facultades-de-administracion"
  },
  {
    id: "faq-49",
    category: "modificacion",
    question: "¿La modificación de giro agrega los nuevos giros ante el SII?",
    answer: "No: considera solo la modificación de estatutos. Si quieres que agreguemos los giros ante el SII, tiene un valor adicional de $20.000 + IVA ($23.800), que incluye la acreditación de actividades en caso de que no la tengas realizada.",
    serviceUrl: "/modificacion-de-estatutos/cambio-de-giro"
  },
  {
    id: "faq-50",
    category: "modificacion",
    question: "¿Cuál es la diferencia entre giro y objeto social?",
    answer: "El objeto social describe en los estatutos las actividades de la empresa; el giro son las actividades registradas ante el SII. Por eso primero se modifica el objeto social y luego se actualizan las actividades ante el SII.",
    serviceUrl: "/modificacion-de-estatutos/cambio-de-giro"
  },
  {
    id: "faq-51",
    category: "modificacion",
    question: "¿El cambio de representante legal incluye a administradores y gerente general?",
    answer: "Sí, el servicio considera representantes legales, administradores y gerente general, con el aviso al SII incluido.",
    serviceUrl: "/modificacion-de-estatutos/cambio-de-representante-legal"
  },
  {
    id: "faq-52",
    category: "modificacion",
    question: "¿Cuántas compraventas de acciones incluye el cambio de accionistas?",
    answer: "El valor considera 1 compraventa. Desde 2 compraventas aplica el servicio general de modificación de estatutos, de $60.000 + IVA.",
    serviceUrl: "/modificacion-de-estatutos/cambio-de-accionistas"
  },
  {
    id: "faq-53",
    category: "modificacion",
    question: "¿Se actualiza el capital al cambiar representantes o accionistas?",
    answer: "Sí, si es el caso. Los servicios de cambio de representante legal y de cambio de accionistas incluyen la actualización de capital, ya sea por aumento o por capital enterado, sin costo adicional.",
    serviceUrl: "/modificacion-de-estatutos/cambio-de-accionistas"
  },
  {
    id: "faq-54",
    category: "modificacion",
    question: "¿Para qué transformar una SpA en EIRL o SRL?",
    answer: "Una de las razones más comunes es poder acogerte a la Microempresa Familiar (MEF). La transformación no requiere aviso posterior al SII.",
    serviceUrl: "/modificacion-de-estatutos/transformacion-spa-a-eirl-o-srl"
  },
  {
    id: "faq-55",
    category: "modificacion",
    question: "¿Puedo transformar mi EIRL o SRL en SpA?",
    answer: "Sí, está incluido en el servicio de modificación de EIRL o SRL, con el aviso al SII y sin notario requerido.",
    serviceUrl: "/modificacion-de-estatutos/modificacion-de-eirl-y-srl"
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
    answer: "Es el permiso oficial otorgado por la municipalidad que te autoriza a operar tu negocio legalmente dentro de la comuna: si formalizas es tu responsabilidad tener patente comercial. Nuestro servicio de gestión aplica solo para la comuna de Santiago Centro.",
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
    answer: "Depende del servicio que elijas (la gestión de patente aplica solo para Santiago Centro), ya que en el Básico la gestión es a través de la plataforma de la municipalidad, la cual tiene una revisión promedio de entre 15 a 45 días, sujeta a la respuesta de la Municipalidad y que se puede extender si hay mucha carga de solicitudes. En cambio, en el Servicio Completo, que es el más popular, dependerá de cuándo haya días disponibles en la plataforma: si hay fecha para el mismo día, el mismo día vamos y podríamos tener tu patente comercial enseguida.",
    serviceUrl: "/patente-municipal"
  },
  {
    id: "faq-31",
    category: "patente-municipal",
    question: "¿Qué documentos necesito?",
    answer: "El estatuto actualizado, el inicio de actividades y tu cédula de identidad vigente. Dependiendo del tipo de actividades por las cuales quieras gestionar tu patente comercial puede que necesitemos la resolución sanitaria. Estos requisitos corresponden a la gestión en Santiago Centro, que es donde realizamos este trámite.",
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
var SITE="https://www.habilitatupyme.cl";
/* Formulario de la Home: clave PÚBLICA de Web3Forms (https://web3forms.com), creada con contacto@habilitatupyme.cl.
   Mientras esté vacía, el botón "Enviar por Correo" usa el método antiguo (abre el correo del visitante). */
var FORM_KEY="c1ff2445-b318-4a0f-a74c-254a8954c90f";
var FORM_URL="https://api.web3forms.com/submit";
var PH="56956795885",EM="contacto@habilitatupyme.cl",MAP="https://maps.app.goo.gl/7Sz8qhBkikhFY5Fv8";
/* En Vercel (dominio propio) usa rutas limpias; en la vista previa de Claude usa #hash. */
var PATHMODE=location.protocol.indexOf("http")==0&&!/claude|anthropic/i.test(location.hostname);
var PATHS={"inicio":"","constitucion-empresa":"empresa-en-un-dia","modificacion-estatutos":"modificacion-de-estatutos","oficina-virtual":"oficina-virtual","patente-municipal":"patente-municipal","certificado-digital":"certificado-digital","mod-facultades":"modificacion-de-estatutos/facultades-de-administracion","mod-giro":"modificacion-de-estatutos/cambio-de-giro","mod-representante":"modificacion-de-estatutos/cambio-de-representante-legal","mod-accionistas":"modificacion-de-estatutos/cambio-de-accionistas","mod-spa-limitada":"modificacion-de-estatutos/transformacion-spa-a-eirl-o-srl","mod-limitada":"modificacion-de-estatutos/modificacion-de-eirl-y-srl","preguntas-frecuentes":"preguntas-frecuentes","blog":"blog","terminos-y-condiciones":"terminos-y-condiciones","informacion-legal":"informacion-legal"};
var SLUG={};Object.keys(PATHS).forEach(function(k){SLUG[PATHS[k]]=k});SLUG["constitucion-empresa"]="constitucion-empresa";SLUG["modificacion-estatutos"]="modificacion-estatutos";SLUG["inicio"]="inicio";
function hr(k){return k=="inicio"?(PATHMODE?"/":"#inicio"):(PATHMODE?"/":"#")+PATHS[k]}
function A(k,t,c){return'<a'+(c?' class="'+c+'"':"")+' href="'+hr(k)+'" data-r="'+k+'">'+t+'</a>'}
function wa(t){return"https://wa.me/"+PH+"?text="+encodeURIComponent(t)}
function cta(t){return'<a class="btn bo" target="_blank" rel="noopener" href="'+wa(t)+'">Iniciar Asesoría Gratuita</a>'}
function ic(k){var p={doc:'<path d="M6 3h8l4 4v14H6z M14 3v4h4 M9 12h6 M9 16h6"/>',edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/>',pin:'<path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',lic:'<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 11h4 M7 14h8"/>',key:'<circle cx="8" cy="12" r="4"/><path d="M12 12h9 M18 12v3"/>',bulb:'<path d="M12 3a6 6 0 0 0-3 11v3h6v-3a6 6 0 0 0-3-11z M10 20h4"/>',more:'<circle cx="6" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/>'};return'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="color:var(--ac)">'+(p[k]||p.more)+'</svg>'}
var LOGO='<svg width="46" height="46" viewBox="0 0 46 46"><path d="M23 3a14 14 0 0 0-8 25.5V33h16v-4.5A14 14 0 0 0 23 3z" fill="#ff6600"/><rect x="16" y="35" width="14" height="3" rx="1.5" fill="#ff6600"/><rect x="19" y="40" width="8" height="3" rx="1.5" fill="#ff6600"/><path d="M15 15l6 7 11-12" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><div><span>Habilita</span><b>tu PYME</b></div>';
var MENU='<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>';
var S={
"constitucion-empresa":{n:"Constitución de empresas",i:"doc",price:"Desde $35.000",t:"Creación y Constitución de Empresas en Chile: Cómo formalizar tu negocio con éxito",st:"Crear Empresa en un Día: SpA, EIRL y Ltda.",d:"Crea tu SpA, EIRL o Ltda. en Empresa en un Día en menos de 2 horas hábiles, con inicio de actividades y habilitación para facturar. Asesoría inicial gratuita.",lead:"",intro:"Formaliza tu negocio de forma rápida y segura. Te acompañamos con asesoría inicial 100% gratuita para constituir tu empresa lista para operar.",ps:["¿Cómo formalizarse en Chile correctamente? Emprender de forma legal no tiene por qué ser un proceso complejo. En Habilita tu PYME te brindamos una <b>asesoría preliminar 100% gratuita</b> para evaluar tu proyecto antes de realizar cualquier trámite. Analizamos si te conviene una <b>Sociedad por Acciones (SpA), una EIRL o una Sociedad Limitada</b>, explicando con claridad el impacto tributario de cada una. Nuestro objetivo es que conozcas cada paso con total claridad para luego delegar en nosotros la constitución en “<b>Empresa en un Día</b>”, el <b>inicio de actividades ante el SII</b> y la habilitación completa para facturar. Da el salto de la informalidad a una estructura empresarial sólida que te permita contratar con proveedores, postular a financiamientos bancarios y <b>proteger tu patrimonio personal</b>."],w:"Hola Habilita tu PYME, necesito asesoría gratuita para crear mi empresa desde cero."},
"modificacion-estatutos":{n:"Modificación de estatutos",i:"edit",price:"Desde $40.000 + IVA",t:"Modificación de Estatutos para empresas creadas en Empresa en un Día",st:"Modificación de Estatutos Empresa en un Día",d:"Modifica tu SpA, EIRL o Ltda. creada en Empresa en un Día: giro, representante legal, socios, capital o razón social. 100% en línea, con borrador gratis.",lead:"",intro:"Actualiza los estatutos de tu sociedad creada por Empresa en un día de manera ágil y completamente en línea. Respaldamos tu crecimiento empresarial sin errores.",ps:["Modificaciones en <b>Empresa en un Día</b> sin complicaciones. Las empresas crecen, cambian de rumbo y se adaptan. Si necesitas actualizar la estructura legal de tu sociedad actual (SpA, EIRL o SRL), no dejes este trámite en manos de plantillas genéricas que puedan generarte rechazos ante el Servicio de Impuestos Internos (SII) o los bancos. Te ofrecemos un <b>diagnóstico inicial gratuito</b> para revisar tus estatutos actuales. Realizamos todo tipo de actuaciones legales en línea con máxima agilidad: ampliación o modificación de giro u objeto social, cambio de representante legal, compraventa y cesión de acciones, ingresos o salida de socios, aumentos de capital, cesión de derechos sociales, modificación de facultades de la administración o transformación completa de sociedades (como pasar de EIRL a SpA) y <b>pasa de SpA a EIRL para que te puedas acoger a la Microempresa Familiar (MEF)</b>. Actualiza tu empresa con el respaldo técnico que tu negocio necesita para seguir escalando."],w:"Hola Habilita tu PYME, necesito una asesoría para modificar los estatutos de mi sociedad."},
"oficina-virtual":{n:"Oficina virtual",i:"pin",price:"Desde $25.000 + IVA",t:"Oficina Virtual: dirección tributaria y comercial",st:"Oficina Virtual en Santiago: Dirección Tributaria",d:"Oficina virtual en Santiago Centro: dirección tributaria y comercial autorizada por el SII, con recepción de correspondencia. Desde $25.000 + IVA.",lead:"Dirección tributaria y comercial autorizada por el SII en Santiago Centro. Contrato de arriendo inmediato para tu inicio de actividades y patentes.",ps:["Obtén un domicilio válido para el inicio de actividades y la facturación, con recepción de correspondencia y presencia comercial formal."],b:["Dirección autorizada ante el SII","Domicilio comercial para tu sociedad","Apoyo con el trámite de inicio de actividades"],w:"Hola Habilita tu PYME, necesito información para contratar una dirección comercial y tributaria."},
"patente-municipal":{n:"Patente municipal",i:"lic",price:"Desde $20.000 + IVA",t:"Tramitación de patente municipal comercial en Santiago Centro",st:"Patente Municipal en Santiago Centro",d:"Tramitamos tu patente municipal comercial en Santiago Centro: revisión de requisitos, preparación de documentos y seguimiento. Desde $20.000 + IVA.",lead:"Tramitación, guía y obtención de tu patente comercial definitiva ante la Municipalidad de Santiago (Santiago Centro).",ps:["Revisamos y te comentamos los requisitos para gestionar tu patente en Santiago Centro, de acuerdo con tu actividad comercial. Preparamos los antecedentes y acompañamos la solicitud, ya sea en línea o presencial. Este servicio tiene un valor preferencial si contratas oficina virtual con nosotros: escríbenos y te informamos el valor que te corresponde."],b:["Revisión de requisitos para Santiago Centro","Preparación de antecedentes","Seguimiento del trámite"],w:"Hola Habilita tu PYME, necesito asesoría con la Patente Municipal en Santiago Centro."},
"certificado-digital":{n:"Certificado digital",i:"key",price:"Desde $11.000 + IVA",t:"Certificado digital: adquisición e instalación",st:"Certificado Digital para el SII",d:"Certificado digital para firmar facturas y documentos tributarios en el SII, enviado a tu correo. Vigencia de 1, 2 o 3 años, desde $11.000 + IVA.",lead:"Firma electrónica obligatoria para la emisión ilimitada de facturas y documentos tributarios en el portal del SII.",ps:["Te enviamos el certificado digital a tu correo electrónico para que completes el proceso de descarga y centralización y puedas usarlo en tus trámites ante el SII."],b:["Envío del certificado digital a tu correo","Descarga y centralización a cargo del cliente","Uso en trámites del SII"],w:"Hola Habilita tu PYME, necesito adquirir un Certificado Digital."}};
var OF={"constitucion-empresa":["<b>Asesoría preliminar experta</b> 100% gratuita para definir tu estructura jurídica.","<b>Redacción y constitución</b> de la sociedad en la plataforma Empresa en un Día.","<b>Inscripción y obtención del RUT</b> de la empresa ante el SII.","<b>Inicio de Actividades</b> y acreditación para emisión de facturas electrónicas.","<b>Soporte personalizado</b> por un experto de principio a fin del proceso."],
"modificacion-estatutos":["<b>Diagnóstico y revisión inicial gratuita</b> de tus estatutos actuales.","<b>Redacción del borrador</b> del acta de modificación según tus nuevos requerimientos.","<b>Gestión completa del trámite digital</b> en el Registro de Empresas y Sociedades.","<b>Firma electrónica avanzada</b>, ingreso de glosas notariales y aviso correspondiente al SII.","<b>Acompañamiento experto</b> para actualizar giros, capital, socios o representantes legales."]};
var E1=["Redacción de estatutos de la constitución","Obtención de RUT","Inicio de actividades"],E2=E1.concat(["Emisión de e-RUT","Preparación de documentos","Habilitación para facturar (Verificación de actividades)","Habilitación para emitir boletas de ventas (opcional)","Gestión de cuenta bancaria empresa"]),PL1="Creación en menos de 2 horas hábiles",PL2="Creación en menos de 2 horas hábiles; proceso completo con habilitación para facturar hasta 5 días hábiles",RUB="Oficina virtual solo para rubros compatibles, como publicidad, informática, consultoría, ventas en línea y otros servicios",M=["Modificación de SpA, EIRL o SRL: razón social, representantes legales, domicilio comercial, capital, socios, transformación, administración, giro y objeto social","Borrador gratuito previo a cualquier pago","Acuerdo de accionistas","Notificación al SII incluida","Plazo: 48 horas hábiles en escenario ideal, más unos 5 días hábiles de actualización ante el SII (dependiendo del tipo de modificación)","El valor puede variar (reducido) según el tipo de modificación"],NOT=33000,ADD="Por cada accionista adicional: +$5.000 + IVA. Con más de 1 accionista, el valor final se confirma en la asesoría con tu ejecutivo",LIMN="Las EIRL y SRL no requieren notario: basta con el servicio de gestión",NOSPA="Si tu empresa es SpA, no incluye la notaría: puedes sumarla con el servicio con notario en línea o realizarla presencialmente. Las EIRL y SRL no requieren notario",OV=["Recepción de documentación de la empresa","Recepción de fiscalizadores e inspectores","Notificación por correo y/o WhatsApp cada vez que recibas correspondencia o fiscalizaciones","Válida para tramitar patente en Santiago Centro (rubros compatibles)","Certificado de domicilio cuando lo necesites"],OVN=["No incluye la firma electrónica avanzada ($950); también puedes firmar ante notario, con costo asumido por el cliente",RUB],PTN=["No incluye el pago de la patente municipal (se paga directo a la municipalidad)"],CD=["Firma de todos los documentos tributarios electrónicos","Compatible con el SII"];
var P={"constitucion-empresa":[{n:"Empresa Básica",s:"Creación + inicio de actividades",pr:35000,iva:0,f:E1.concat([PL1])},{n:"Empresa Esencial",s:"Creación + facturación esencial",pr:55000,f:E2.concat([PL2]),inc:["1 mes de oficina virtual (rubros compatibles)"],no:["No incluye certificado digital (firma electrónica que permite emitir las facturas)",RUB],pop:1},{n:"Empresa Completa",s:"Creación + facturación completa",pr:75000,f:E2.concat(["Certificado digital SII 1 año","Asistencia en la primera facturación","Primera declaración de IVA (F29)",PL2]),inc:["3 meses de oficina virtual (rubros compatibles)"],no:[RUB]}],
"modificacion-estatutos":[{n:"Modificación de estatutos",s:"Gestión completa, 100% en línea",pr:60000,f:M.concat(["Valor referencial máximo: aplica para modificaciones desde 2 compraventas de acciones"]),no:[NOSPA]},{n:"Modificación + Notario en línea",s:"Gestión + notario en línea, 100% digital",pr:60000+NOT,ds:1,f:M.concat(["Notario en línea, 100% digital (requerido para SpA)","El valor considera 1 accionista"]),no:[ADD,LIMN],pop:1}],
"oficina-virtual":[{n:"Servicio Semestral",s:"Precio por 6 meses, ideal para empezar",pr:25000,old:40000,f:OV,inc:["1 mes de oficina virtual (valor mensual $8.000 + IVA)"],no:OVN},{n:"Servicio Anual",s:"Precio por 12 meses, mejor precio por mes",pr:40000,old:80000,f:OV,inc:["2 meses de oficina virtual (valor mensual $8.000 + IVA)"],no:OVN,pop:1}],
"patente-municipal":[{n:"Servicio Básico",s:"Gestión de tu patente en Santiago Centro",pr:20000,f:["Revisión completa de documentos y requisitos","Preparación de toda la documentación","Envío de solicitud de patente comercial en línea","Seguimiento del proceso hasta la aprobación","Confirmación del proceso e indicaciones para el pago","Duración del proceso: 15 a 45 días, sujeto a respuesta de la Municipalidad"],no:PTN.concat(["No incluye asistencia presencial"])},{n:"Servicio Completo",s:"Patente + asistencia presencial",pr:30000,f:["Revisión completa de documentos y requisitos","Preparación y presentación de toda la documentación","Solicitud de hora en la municipalidad","Ida presencial de nuestro asesor a la municipalidad","Confirmación del proceso e indicaciones para el pago","Duración del proceso: 1 a 7 días"],inc:["Asistencia presencial incluida"],no:PTN,pop:1}],
"certificado-digital":[{n:"Certificado 1 año",s:"Ideal para comenzar",pr:11000,f:CD.concat(["Vigencia de 1 año"])},{n:"Certificado 2 años",s:"Mayor duración sin invertir tanto",pr:18500,f:CD.concat(["Vigencia de 2 años"]),inc:["Ahorro real frente a comprar año a año"]},{n:"Certificado 3 años",s:"Mayor duración, mejor precio",pr:19000,f:CD.concat(["Vigencia de 3 años"]),inc:["Ahorro real frente a comprar año a año","El mejor valor por año"],pop:1}]};
var C={"constitucion-empresa":"Tu empresa te espera: comienza hoy","modificacion-estatutos":"Mantén tu empresa actualizada legalmente","oficina-virtual":"Obtén hoy tu dirección tributaria","patente-municipal":"Comienza hoy la gestión de tu patente comercial","certificado-digital":"Comienza a emitir documentos tributarios hoy"};
var WM={"404":"Hola Habilita tu PYME, intenté entrar a una página que no encontré y necesito ayuda.",inicio:"Hola Habilita tu PYME, quiero asesoría comercial gratuita para mi PYME.","preguntas-frecuentes":"Hola Habilita tu PYME, tengo una consulta que no encontré en las preguntas frecuentes.",blog:"Hola Habilita tu PYME, quiero asesoría gratuita para mi emprendimiento.","terminos-y-condiciones":"Hola Habilita tu PYME, tengo una consulta sobre los términos y condiciones.","informacion-legal":"Hola Habilita tu PYME, tengo una consulta sobre su información legal."};
function msgFor(k){return S[k]?S[k].w:SUB[k]?SUB[k].w:WM[k]}
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
if(W.s==3)h+='<h3>3. Datos de contacto</h3><input placeholder="Nombre completo" value="'+W.n+'" data-i="n"><input type="email" placeholder="Correo electrónico" value="'+W.e+'" data-i="e"><input type="tel" placeholder="Teléfono" value="'+W.t+'" data-i="t"><input type="checkbox" id="bc" tabindex="-1" autocomplete="off" aria-hidden="true" style="display:none"><p id="wm" role="status" style="color:var(--cta);font-size:14px"></p><div style="display:grid;gap:8px"><button class="btn bn" id="sm" data-a="mail">Enviar por Correo</button><p style="font-size:12px;margin:0">Usaremos tus datos solo para responder tu solicitud.</p><div class="ar"><button class="btn bk" data-a="back">Volver</button><button class="btn bo" data-a="wa">Hablar de inmediato por WhatsApp con mis datos</button></div></div>';
if(W.s==4)h+='<h3>¡Solicitud enviada!</h3><p>Recibimos tus datos y te contactaremos a la brevedad. Si es urgente, escríbenos ahora por WhatsApp.</p><div class="ar"><button class="btn bk" data-a="again">Enviar otra solicitud</button><a class="btn bo" target="_blank" rel="noopener" href="'+wa(msg())+'">Escribir por WhatsApp</a></div>';
document.getElementById("wiz").innerHTML='<div class="stp">'+h+'</div>'}
function back(){if(W.s>1){W.s--;wiz()}}
function p1(i){if(W.tipo!=TIPOS[i]){W.tipo=TIPOS[i];W.need="";W.rut=""}W.s=2;wiz()}
function p2(i){W.need=needs()[i];wiz()}
function nx(){if(!W.need){document.getElementById("wm").textContent="Elige una opción para continuar.";return}W.s=3;wiz()}
function ok(){if(!W.n||!W.t){document.getElementById("wm").textContent="Completa tu nombre y teléfono.";return false}return true}
function sendWa(){if(ok())window.open(wa(msg()),"_blank")}
function sendMail(){if(!ok())return;var wm=document.getElementById("wm");
if(!W.e||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(W.e)){wm.textContent="Agrega un correo válido.";return}
if(!FORM_KEY){location.href="mailto:"+EM+"?subject="+encodeURIComponent("Solicitud web - "+W.need)+"&body="+encodeURIComponent(msg()+"\nCorreo: "+W.e);return}
var b=document.getElementById("sm");b.disabled=true;b.textContent="Enviando…";wm.textContent="";
var bc=document.getElementById("bc");
fetch(FORM_URL,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:FORM_KEY,subject:"Solicitud web - "+W.need,from_name:"Sitio habilitatupyme.cl",name:W.n,email:W.e,phone:W.t,tipo_de_empresa:W.tipo,necesidad:W.need,rut:W.rut||"No indicado",message:msg()+"\nCorreo: "+W.e,botcheck:bc?bc.checked:false})})
.then(function(r){return r.json().then(function(d){if(!r.ok||!d.success)throw 0;W.s=4;wiz()})})
.catch(function(){b.disabled=false;b.textContent="Enviar por Correo";wm.textContent="No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos por WhatsApp."})}
/* Páginas */
function sCard(k,main){var s=S[k];return'<a class="card'+(main?" fa":"")+'" href="'+hr(k)+'" data-r="'+k+'">'+(main?'<span class="tag">'+(k=="constitucion-empresa"?"Creación":"Modificación")+'</span>':ic(s.i))+'<h3'+(main?"":' style="margin-top:8px"')+'>'+s.n+'</h3><p>'+s.d+'</p><div class="pr" style="font-size:22px;margin-top:10px">'+s.price+'</div><span class="more">Ver servicio →</span></a>'}
function home(){var o=Object.keys(S).filter(function(k){return k!="constitucion-empresa"&&k!="modificacion-estatutos"});
return'<section class="hn" style="text-align:center"><div class="w"><h1>¿Qué necesita tu empresa hoy?</h1><p style="font-size:18px;max-width:640px;margin:0 auto">Cuéntanos en 3 simples pasos para entregarte una asesoría personalizada inmediata.</p><div id="wiz"></div></div></section>'+
'<section><div class="w"><h2 style="text-align:center;max-width:820px;margin:0 auto 10px"><b>Crea, constituye, formaliza y modifica</b> tu empresa <b>desde cualquier parte de Chile</b>.</h2><p style="text-align:center;color:var(--mu);max-width:720px;margin:0 auto 28px">Comenzamos siempre con una asesoría preliminar gratuita para que decidas con conocimiento y, después, delegues el trámite con un equipo experto.</p><div class="g2 mn" style="align-items:stretch">'+sCard("constitucion-empresa",1)+sCard("modificacion-estatutos",1)+'</div><div class="g3" style="margin-top:16px">'+o.map(function(k){return sCard(k)}).join("")+'</div></div></section>'+
'<section class="dk"><div class="w"><h2>Por qué confiar en nosotros</h2><div class="g3"><div class="card">'+ic("bulb")+'<h3>Experto humano</h3><p>Una persona real revisa y acompaña tu trámite.</p></div><div class="card">'+ic("doc")+'<h3>100% online</h3><p>Firma y gestiona desde cualquier región de Chile.</p></div><div class="card">'+ic("lic")+'<h3>Precios visibles</h3><p>Valores referenciales publicados en cada servicio.</p></div></div></div></section>'+endcta("Empieza con una asesoría gratuita",WM.inicio)}
function plan(k,p,ds){var v=p.iva===0?0:1,t="Hola Habilita tu PYME, quiero contratar "+(k=="oficina-virtual"?"el plan ":"el servicio ")+p.n+" de "+(S[k]||SUB[k]).n+" ("+m(p.pr)+(v?" + IVA":"")+").";return'<div class="card pc'+(p.pop?" pop":"")+'" data-wa="'+wa(t)+'" '+(p.pop?' style="border-color:#FF6B35"':"")+'>'+(p.pop?'<span class="rb">★ Más popular</span>':"")+'<h3>'+p.n+'</h3><p>'+p.s+'</p><div><span class="pbox">'+(ds||p.ds?"<small>Desde</small>":"")+m(p.pr)+(v?"<small>+ IVA</small>":"")+'</span></div>'+(p.old?'<p><s>'+m(p.old)+' + IVA</s> · Ahorras '+m(Math.round((p.old-p.pr)*1.19))+'</p>':"")+(v?'<p>Total: '+m(Math.round(p.pr*1.19))+'</p>':"")+'<ul class="ck">'+li(p.f)+'</ul>'+(p.inc?'<p><b>'+(p.incT||"Incluido:")+'</b></p><ul class="ck">'+li(p.inc)+'</ul>':"")+(p.no?'<p><b>Considera:</b></p><ul style="color:var(--mu);font-size:14px;padding-left:18px">'+li(p.no)+'</ul>':"")+'<a class="btn bo" target="_blank" rel="noopener" href="'+wa(t)+'">Quiero este servicio</a></div>'}
function svc(k){return svcMain(k)}
var REQ={"constitucion-empresa":["Ser mayor de 18 años.","Ser chileno o extranjero con residencia permanente o temporal vigente que permita realizar actividades lícitas.","Contar con ClaveÚnica activa.","Cédula de identidad chilena vigente.","Tener definidos los socios y el capital inicial.","Contar con un domicilio tributario para la empresa.","Dispositivo con conexión a internet para realizar la firma electrónica del proceso."],"modificacion-estatutos":["Aplica exclusivamente para sociedades o empresas creadas bajo el Régimen Simplificado (plataforma Empresa en un Día).","Socios o accionistas deben ser chilenos o extranjeros con residencia permanente o temporal vigente.","Contar con ClaveÚnica activa.","Cédula de identidad chilena vigente.","Dispositivo con conexión a internet para realizar la firma electrónica del proceso."]};
var REQN={"constitucion-empresa":["<b>Importante:</b> no firmes contratos de arriendo a título personal si aún no constituyes la sociedad.","<b>Domicilio tributario válido:</b> el SII verifica la dirección antes de habilitarte para emitir facturas y boletas. Si no se puede acreditar, el trámite queda observado y la habilitación se retrasa. Lo revisamos contigo desde la primera asesoría."]};
var STEPS={"constitucion-empresa":{t:"Así creamos tu empresa",s:[["Asesoría inicial gratuita","Conversamos tu proyecto y tomamos los datos."],["Borrador de estatutos","Redactamos y revisamos contigo cada cláusula."],["Firma FEA o notaría","Firma electrónica avanzada o ante notario."],["RUT e inicio de actividades","Obtenemos el RUT y hacemos el inicio de actividades ante el SII."],["¡Empresa lista!","Creación en menos de 2 horas hábiles. Con la habilitación para facturar, el proceso completo puede tomar hasta 5 días hábiles."]]},
"modificacion-estatutos":{t:"Así modificamos tu empresa",s:[["Asesoría inicial","Revisamos tus estatutos y lo que necesitas cambiar."],["Borrador de modificación","Gratuito y previo a cualquier pago."],["Pago del servicio","Comienza el proceso de modificación."],["Trámite ante notario","Protocolización (si es que aplica para tu empresa)."],["Firma de socios o accionistas","Firma de aceptación de la modificación."],["Notificación al SII","Aviso al SII de los cambios realizados."],["¡Listo, sociedad modificada!","Solo quedará avisar al banco y a otras entidades de la modificación realizada."]],p:"Plazo: 48 horas hábiles en escenario ideal, más unos 5 días hábiles de actualización ante el SII (dependiendo del tipo de modificación).",n:"<b>Borrador gratuito previo a cualquier pago:</b> te enviamos sin costo un borrador de cómo quedaría tu sociedad, para que verifiques que es lo que buscas. Solo necesitamos el RUT de la sociedad y saber qué deseas modificar."}};
var PAY='<div class="pay">Medios de pago: <span>Transferencia bancaria</span><span>Webpay</span></div>';
function steps(k){var st=STEPS[k];if(!st)return"";return'<section><div class="w"><h2>'+st.t+'</h2>'+(st.p?'<p style="color:var(--mu)">'+st.p+'</p>':"")+(st.n?'<div class="note ok">'+st.n+'</div>':"")+'<ol class="steps" style="--c:'+st.s.length+'">'+st.s.map(function(x,i){return'<li><span class="n">'+(i==st.s.length-1?"✓":i+1)+'</span><div><b>'+x[0]+'</b>'+(x[1]?'<p>'+x[1]+'</p>':"")+'</div></li>'}).join("")+'</ol></div></section>'}
function seg(i){for(var j=0;j<2;j++){document.getElementById("sb"+j).setAttribute("aria-selected",j==i);document.getElementById("sp"+j).classList.toggle("on",j==i)}}
function svcMain(k){var s=S[k];
return'<section class="hn"><div class="w"><span class="tag">'+s.n+'</span><h1>'+s.t+'</h1><p class="intro">'+(s.intro||s.lead)+'</p><p class="hb2">'+cta(s.w)+(k=="modificacion-estatutos"?'<button class="btn bw" data-a="go" data-v="mas-solicitadas">Más solicitadas ↓</button>':"")+'</p></div></section>'+
'<section><div class="w">'+(REQ[k]?'<div style="text-align:center"><div class="seg" role="tablist"><button class="tb" role="tab" id="sb0" aria-selected="true" data-a="seg" data-v="0">Servicios</button><button class="tb" role="tab" id="sb1" aria-selected="false" data-a="seg" data-v="1">Requisitos Obligatorios</button></div></div>':"")+
'<div class="sp on" id="sp0" style="margin-top:24px"><div class="g3'+(P[k].length==2?" two":"")+'">'+P[k].map(function(p){return plan(k,p,0)}).join("")+'</div><p style="color:var(--mu);font-size:14px;text-align:center;margin-top:14px">Valores en pesos chilenos. El IVA se indica en cada '+(k=="oficina-virtual"?"plan":"servicio")+'.</p>'+PAY+'</div>'+
(REQ[k]?'<div class="sp" id="sp1" style="margin-top:24px"><div class="card" style="max-width:720px;margin:0 auto"><h3>Los únicos requisitos son:</h3><ul class="ck">'+li(REQ[k])+'</ul>'+(REQN[k]||[]).map(function(x){return'<div class="note">'+x+'</div>'}).join("")+'</div></div>':"")+'</div></section>'+steps(k)+
'<section class="alt"><div class="w g2" style="align-items:start"><div>'+(IMG[k]?'<div class="ph">'+IMG[k]+'</div>':"")+s.ps.map(function(p){return"<p>"+p+"</p>"}).join("")+'</div><div class="card"><h3>Qué ofrecemos</h3><ul class="ck">'+li(OF[k]||s.b)+'</ul></div></div></section>'+types(k)+others(k,1)+endcta(C[k],s.w)}
/* SEO: tipos de modificación, preguntas por servicio, datos estructurados (JSON-LD) y vista previa al compartir (Open Graph) */
/* ============================================================
   SUBPÁGINAS DE MODIFICACIÓN: edita aquí textos y precios.
   g: valor gestión (+ IVA) · full: valor con notario en línea (0 = sin notario) · sii: "si" | "no" | "trans" | "" (no se muestra)
   inc: qué incluye · ex: cambios sin costo adicional · add: condiciones extra
   ============================================================ */
var EEUD="Servicio exclusivo para empresas creadas en Empresa en un Día (Registro de Empresas y Sociedades).";
var SUB={
"mod-facultades":{h2:"¿Por qué revisar las facultades de administración de tu empresa?",pre:["Las facultades de administración definen qué puede hacer en nombre de la empresa quien la administra o representa: abrir y operar cuentas bancarias, firmar contratos, solicitar créditos, contratar trabajadores o realizar trámites ante organismos públicos, entre otras.","Cuando una empresa se crea en Empresa en un Día sin incluir las facultades sugeridas, o con facultades muy acotadas, es común encontrar trabas al abrir una cuenta corriente o al hacer gestiones con bancos y proveedores. Modificar los estatutos para ampliar y ordenar estas facultades evita esos problemas."],cu:["El banco te pide facultades que tus estatutos no incluyen","Creaste tu empresa por tu cuenta y no agregaste las facultades sugeridas","Necesitas que la administración pueda firmar contratos, operar cuentas o solicitar créditos"],n:"Modificación de facultades de la administración",c:"Ajustamos las facultades de tu sociedad, incluyendo las que piden ciertos bancos.",t:"Modificación de facultades de la administración en Empresa en un Día",st:"Modificar Facultades | Empresa en un Día",d:"Ajusta las facultades de administración de tu empresa creada en Empresa en un Día, incluidas las que piden ciertos bancos. Desde $40.000 + IVA, 100% en línea.",intro:"¿Creaste tu empresa por tu cuenta y no incluiste las facultades sugeridas por Empresa en un Día? Las ajustamos para que tu sociedad opere sin trabas.",ps:["Este servicio está orientado, generalmente, a quienes crearon su empresa por su cuenta y no agregaron las facultades que Empresa en un Día ofrece por defecto o sugiere.","Nos encargamos de modificar las facultades de la administración, ajustadas bajo nuestra experiencia: incluimos las de Empresa en un Día y las que ajustamos de acuerdo con los requerimientos de ciertos bancos."],inc:["Revisión de las facultades actuales de tu sociedad","Nuevas facultades: las de Empresa en un Día y las que ajustamos según ciertos bancos","Gestión completa del trámite en el Registro de Empresas y Sociedades"],ex:["Cambio de razón social","Modificación de giro u objeto social","Otros ajustes básicos"],add:["No incluye aviso al SII. Si incluyes un cambio de giro y quieres que actualicemos tus actividades ante el SII, tiene un valor adicional de $20.000 + IVA ($23.800)"],g:40000,full:70000,sii:"",w:"Hola Habilita tu PYME, necesito modificar las facultades de la administración de mi empresa."},
"mod-giro":{h2:"¿Quieres ampliar tu giro o desarrollar nuevas actividades?",pre:["El objeto social es la parte de los estatutos que describe a qué se dedica tu empresa. Lo recomendable es que las actividades que registras ante el SII estén contempladas en él: si quieres desarrollar una actividad que no figura en tus estatutos, primero debes modificar el objeto social.","Modificar el giro te permite, por ejemplo, sumar una nueva línea de negocio, prestar servicios distintos a los originales o vender nuevos productos, manteniendo tu empresa en regla. Redactamos el nuevo objeto social de forma clara y con la amplitud necesaria para que tu empresa pueda crecer."],cu:["Quieres agregar nuevas actividades económicas ante el SII","Tu negocio cambió de rubro o sumó una nueva línea de productos o servicios","Un banco, cliente o institución te pide que tu objeto social incluya cierta actividad"],n:"Modificación de giro",c:"Amplía, cambia o ajusta el objeto social para desarrollar nuevas actividades.",t:"Modificación de giro u objeto social en Empresa en un Día",st:"Modificación de Giro | Empresa en un Día",d:"Amplía o cambia el giro u objeto social de tu empresa creada en Empresa en un Día. Desde $40.000 + IVA, 100% en línea y con borrador gratis.",intro:"¿Quieres ampliar tu giro o desarrollar nuevas actividades ante el SII que no figuran en tus estatutos? Modificamos el objeto social de tu empresa para que puedas hacerlo.",ps:["Si quieres ampliar tu giro o desarrollar nuevas actividades ante el SII que no figuran en tus estatutos, este servicio te servirá: ampliamos, modificamos o ajustamos el objeto social de tu sociedad.","El servicio considera la modificación de estatutos. Si además quieres que agreguemos los nuevos giros ante el SII, puedes sumarlo por un valor adicional, que incluye la acreditación de actividades en caso de que aún no la tengas realizada."],inc:["Redacción del nuevo objeto social según las actividades que quieres desarrollar","Gestión completa del trámite en el Registro de Empresas y Sociedades"],ex:["Modificación de facultades de la administración","Cambio de razón social","Otros ajustes básicos"],add:["No incluye aviso al SII. Agregar los giros o actividades ante el SII tiene un valor adicional de $20.000 + IVA ($23.800), con acreditación de actividades incluida si no la tienes realizada"],g:40000,full:70000,sii:"",w:"Hola Habilita tu PYME, necesito modificar el giro u objeto social de mi empresa."},
"mod-representante":{h2:"¿Cuándo cambiar al representante legal de tu empresa?",pre:["El representante legal es la persona que actúa en nombre de la empresa ante bancos, el SII, clientes y proveedores. Cuando cambia quien administra la sociedad, se suma alguien a la gestión o el representante actual deja la empresa, es necesario modificar los estatutos para que el cambio tenga validez.","Gestionamos la modificación en el Registro de Empresas y Sociedades y damos aviso al SII, para que luego puedas actualizar tus datos en el banco y seguir operando sin interrupciones."],cu:["El representante actual deja la empresa o ya no la administrará","Quieres sumar a otro administrador o designar un gerente general","Necesitas actualizar quién firma ante bancos y organismos públicos"],n:"Cambio de representante legal",c:"Cambia representantes legales, administradores o gerente general, con aviso al SII.",t:"Cambio de representante legal en Empresa en un Día",st:"Cambio de representante legal | Empresa en un Día",d:"Cambia el representante legal, administrador o gerente general de tu empresa creada en Empresa en un Día. Desde $45.000 + IVA, con aviso al SII incluido.",intro:"Cambia a los representantes legales, administradores o gerente general de tu sociedad, con el aviso al SII incluido.",ps:["Este servicio está orientado a modificar a los representantes legales, administradores o gerente general de tu empresa.","Redactamos la modificación, gestionamos el trámite en el Registro de Empresas y Sociedades y avisamos al SII del cambio."],inc:["Cambio de representantes legales, administradores o gerente general","Gestión completa del trámite en el Registro de Empresas y Sociedades","Aviso al SII incluido"],ex:["Actualización de capital, si es el caso (aumento o capital enterado)","Cambio de giro","Cambio de razón social","Modificación de facultades","Otros ajustes básicos"],g:45000,full:75000,sii:"si",w:"Hola Habilita tu PYME, necesito cambiar el representante legal de mi empresa."},
"mod-accionistas":{h2:"¿Entra o sale un socio de tu empresa?",pre:["La compraventa de acciones permite que un nuevo socio ingrese a la empresa, que un socio venda su participación o que cambie la distribución de la propiedad entre los accionistas. En las empresas creadas en Empresa en un Día, este cambio se formaliza mediante una modificación en el Registro de Empresas y Sociedades.","Nos encargamos de la redacción, la gestión del trámite y el aviso al SII, para que la nueva estructura de accionistas quede en regla y puedas presentarla ante bancos y otras instituciones."],cu:["Un nuevo socio quiere ingresar a la empresa","Un socio quiere vender su participación o retirarse","Quieren cambiar el porcentaje de acciones de cada socio"],n:"Cambio de accionistas o socios",c:"Compraventa de acciones para el ingreso, salida o cambio de accionistas.",t:"Cambio de accionistas o socios en Empresa en un Día",st:"Compraventa de Acciones | Empresa en un Día",d:"Modifica los accionistas o socios de tu empresa creada en Empresa en un Día. Desde $50.000 + IVA por 1 compraventa de acciones, con aviso al SII incluido.",intro:"Modifica los accionistas o socios de tu empresa mediante compraventa de acciones, con el aviso al SII incluido.",ps:["Este servicio está orientado a modificar los accionistas o socios de tu empresa.","El valor considera 1 compraventa de acciones. Desde 2 compraventas aplica el servicio general de modificación de estatutos, de $60.000 + IVA."],inc:["Modificación de accionistas o socios (considera 1 compraventa de acciones)","Gestión completa del trámite en el Registro de Empresas y Sociedades","Aviso al SII incluido"],ex:["Actualización de capital, si es el caso (aumento o capital enterado)","Cambio de giro","Cambio de razón social","Modificación de facultades","Cambio de representantes legales","Otros ajustes básicos"],add:["Desde 2 compraventas de acciones aplica el servicio general de modificación ($60.000 + IVA)"],g:50000,full:50000+NOT,sii:"si",w:"Hola Habilita tu PYME, necesito cambiar los accionistas o socios de mi empresa."},
"mod-spa-limitada":{h2:"¿Por qué pasar de SpA a EIRL o Sociedad Limitada?",pre:["Muchas empresas se constituyen como SpA por su flexibilidad, pero con el tiempo sus dueños buscan acogerse a la Microempresa Familiar (MEF). Para eso, transformamos la sociedad en una empresa limitada: una EIRL, si hay un solo dueño, o una Sociedad de Responsabilidad Limitada (SRL), si son varios socios.","La transformación permite cambiar el tipo de sociedad sin crear una empresa nueva y no requiere aviso posterior al SII. Te acompañamos en todo el proceso, 100% en línea."],cu:["Quieres acogerte a la Microempresa Familiar (MEF)","Tu SpA tiene un solo dueño y prefieres una EIRL","Tu SpA tiene varios socios y prefieren una Sociedad Limitada"],n:"Transformación de SpA a EIRL o SRL",c:"Pasa tu SpA a EIRL o Sociedad Limitada para acogerte a la Microempresa Familiar (MEF).",t:"Transformación de SpA a EIRL o Sociedad Limitada en Empresa en un Día",st:"SpA a EIRL o Limitada (MEF) | Empresa en un Día",d:"Transforma tu SpA en EIRL o Sociedad de Responsabilidad Limitada y acógete a la Microempresa Familiar (MEF). Desde $50.000 + IVA, 100% en línea.",intro:"Pasa tu SpA a una empresa limitada, ya sea EIRL o SRL, para que te puedas acoger a la Microempresa Familiar (MEF).",ps:["Este servicio está orientado a transformar tu SpA en una empresa limitada: una Empresa Individual de Responsabilidad Limitada (EIRL) o una Sociedad de Responsabilidad Limitada (SRL), para que te puedas acoger a la Microempresa Familiar (MEF).","Esta transformación no requiere aviso posterior al SII."],inc:["Transformación de SpA a EIRL o SRL","Gestión completa del trámite en el Registro de Empresas y Sociedades","No requiere aviso posterior al SII"],ex:["Cambio de giro","Cambio de razón social","Modificación de facultades","Cambio de representantes legales","Otros ajustes básicos"],g:50000,full:50000+NOT,sii:"no",w:"Hola Habilita tu PYME, necesito transformar mi SpA a EIRL o Sociedad Limitada."},
"mod-limitada":{h2:"Modifica tu EIRL o Sociedad Limitada, sin notario requerido",pre:["Las Empresas Individuales de Responsabilidad Limitada (EIRL) y las Sociedades de Responsabilidad Limitada (SRL) creadas en Empresa en un Día pueden modificarse sin pasar por notaría. Por eso el trámite es más simple, más económico y más rápido.","Con este servicio puedes cambiar el giro u objeto social, la razón social, el domicilio, el capital, la administración o cualquier otro aspecto de tu empresa, o incluso transformarla en SpA."],cu:["Tienes una EIRL o SRL creada en Empresa en un Día","Necesitas cambiar giro, razón social, domicilio, capital o administración","Quieres transformar tu EIRL o SRL en SpA"],n:"Modificación de EIRL o SRL",c:"Cualquier cambio en tu EIRL o SRL, o su transformación a SpA. Sin notario requerido.",t:"Modificación de EIRL y Sociedad de Responsabilidad Limitada en Empresa en un Día",st:"Modificar EIRL o SRL | Empresa en un Día",d:"Modifica tu EIRL o SRL creada en Empresa en un Día, o transfórmala en SpA. $40.000 + IVA, sin notario requerido y en menos de 24 horas hábiles.",intro:"Modifica cualquier aspecto de tu EIRL o SRL, o transfórmala en SpA. Sin notario requerido: es la modificación más rápida.",ps:["Este servicio está orientado a modificar cualquier aspecto de una empresa limitada, sea Sociedad de Responsabilidad Limitada (SRL) o Empresa Individual de Responsabilidad Limitada (EIRL), así como a transformarla en SpA.","Las empresas limitadas no requieren notario para modificarse: con nuestro servicio de gestión basta. Es la modificación más rápida: tu empresa podría quedar modificada en menos de 24 horas hábiles."],inc:["Modificación de cualquier aspecto de tu EIRL o SRL","Transformación a SpA, si la necesitas","Aviso al SII incluido en caso de transformación a SpA","Sin notario requerido","Gestión completa del trámite en el Registro de Empresas y Sociedades"],ex:[],g:40000,full:0,sii:"trans",w:"Hola Habilita tu PYME, necesito modificar mi EIRL o Sociedad Limitada."}};
function subPrice(x){return(x.full?"Desde ":"")+m(x.g)+" + IVA"}
function subPlans(k){var x=SUB[k],ps=[{n:"Gestión de la modificación",s:x.full?"100% en línea":"100% en línea. Sin notario requerido",pr:x.g,f:x.inc,inc:x.ex.length?x.ex:0,incT:"Incluido sin costo adicional:",no:(x.full?[NOSPA]:[]).concat(x.add||[])}];
if(x.full)ps.push({n:"Gestión + Notario en línea",s:"Para SpA: notario 100% digital",pr:x.full,ds:1,f:["Todo lo del servicio de gestión","Notario en línea, 100% digital","El valor considera 1 accionista"],inc:x.ex.length?x.ex:0,incT:"Incluido sin costo adicional:",no:(x.full!=x.g+NOT?["Valor promocional"]:[]).concat([ADD]).concat(x.add||[]),pop:1});
ps.forEach(function(p){if(!p.no.length)delete p.no;if(!p.inc)delete p.inc});return ps}
function subSteps(k){var x=SUB[k],s=[["Asesoría inicial","Revisamos tus estatutos y lo que necesitas cambiar."],["Borrador de modificación","Gratuito y previo a cualquier pago."],["Pago del servicio","Comienza el proceso de modificación."]];
if(x.full)s.push(["Trámite ante notario","Protocolización (si es que aplica para tu empresa)."]);
s.push(["Firma de socios o accionistas","Firma de aceptación de la modificación."]);
if(x.sii=="si")s.push(["Notificación al SII","Aviso al SII de los cambios realizados."]);if(x.sii=="trans")s.push(["Aviso al SII","Solo en caso de transformación a SpA."]);
s.push(["¡Listo, sociedad modificada!","Solo quedará avisar al banco y a otras entidades de la modificación realizada."]);
return{t:"Así lo hacemos",s:s,p:x.full?(x.sii=="si"?STEPS["modificacion-estatutos"].p:"Plazo: 48 horas hábiles en escenario ideal."):"Plazo: tu empresa podría quedar modificada en menos de 24 horas hábiles."}}
function subCard(k){var x=SUB[k];return'<a class="card" href="'+hr(k)+'" data-r="'+k+'"><h3>'+x.n+'</h3><p>'+x.c+'</p><div class="pr" style="font-size:20px;margin-top:10px">'+subPrice(x)+'</div><span class="more">Ver detalle →</span></a>'}
function types(k){if(k!="modificacion-estatutos")return"";return'<section id="mas-solicitadas"><div class="w"><h2>Modificaciones más solicitadas en Empresa en un Día</h2><p style="color:var(--mu)">Elige el cambio que necesitas para ver qué incluye, su valor y su plazo. Puedes incluir varios cambios en una sola modificación. '+EEUD+'</p><div class="g3">'+Object.keys(SUB).map(subCard).join("")+'</div><p style="color:var(--mu);font-size:14px;margin-top:14px">¿Necesitas otro cambio, como aumento de capital o cambio de domicilio? Lo cubre el servicio general de modificación de estatutos.</p></div></section>'}
function subPage(k){var x=SUB[k],ps=subPlans(k),st=subSteps(k);
return'<section class="hn"><div class="w"><nav class="bc" aria-label="Ruta">'+A("inicio","Inicio")+' › '+A("modificacion-estatutos","Modificación de estatutos")+' › <span>'+x.n+'</span></nav><h1>'+x.t+'</h1><p class="intro">'+x.intro+'</p><div class="pr">'+subPrice(x)+'</div><p>'+cta(x.w)+'</p></div></section>'+
(x.pre?'<section><div class="w g2" style="align-items:start"><div><h2>'+x.h2+'</h2>'+x.pre.map(function(p){return"<p>"+p+"</p>"}).join("")+'</div><div class="card"><h3>¿Cuándo lo necesitas?</h3><ul class="ck">'+li(x.cu)+'</ul></div></div></section>':"")+
'<section class="alt"><div class="w"><h2>Servicios</h2><div class="g3'+(ps.length==2?" two":" one")+'">'+ps.map(function(p){return plan(k,p,0)}).join("")+'</div><p style="color:var(--mu);font-size:14px;text-align:center;margin-top:14px">Valores en pesos chilenos más IVA.</p>'+PAY+'</div></section>'+
'<section><div class="w g2" style="align-items:start"><div><h2>¿En qué consiste?</h2>'+x.ps.map(function(p){return"<p>"+p+"</p>"}).join("")+'<div class="note ok">'+EEUD+(x.full?" "+LIMN+": revisa "+A("mod-limitada","Modificación de EIRL o SRL")+".":"")+'</div></div><div class="card"><h3>Requisitos</h3><ul class="ck">'+li(REQ["modificacion-estatutos"])+'</ul></div></div></section>'+
'<section class="alt"><div class="w"><h2>'+st.t+'</h2><p style="color:var(--mu)">'+st.p+'</p><div class="note ok">'+STEPS["modificacion-estatutos"].n+'</div><ol class="steps" style="--c:'+st.s.length+'">'+st.s.map(function(s,i){return'<li><span class="n">'+(i==st.s.length-1?"✓":i+1)+'</span><div><b>'+s[0]+'</b><p>'+s[1]+'</p></div></li>'}).join("")+'</ol></div></section>'+
'<section><div class="w"><h2>Otras modificaciones</h2><div class="g3">'+Object.keys(SUB).filter(function(o){return o!=k}).map(subCard).join("")+'</div>'+FQL+'</div></section>'+others("modificacion-estatutos")+endcta("Modifica tu empresa sin errores",x.w)}
/* Referencias cruzadas: otros servicios y enlace a preguntas frecuentes */
var FQL='<p style="color:var(--mu);margin-top:18px">¿Tienes dudas? Revisa nuestras '+A("preguntas-frecuentes","preguntas frecuentes")+'.</p>';
function others(k,fq){return'<section><div class="w"><h2>Otros servicios</h2><div class="g3">'+Object.keys(S).filter(function(o){return o!=k}).map(function(o){return sCard(o)}).join("")+'</div>'+(fq?FQL:"")+'</div></section>'}
var SOC=["https://www.instagram.com/habilitatupyme","https://www.linkedin.com/company/habilita-tu-pyme","https://www.facebook.com/profile.php?id=61561669125582"];
function ld(k){var org={"@type":"ProfessionalService","@id":SITE+"/#org","name":"Habilita tu PYME","legalName":"HABILITA TU PYME SPA","url":SITE+"/","logo":SITE+"/icon-512.png","image":SITE+"/icon-512.png","telephone":"+"+PH,"email":EM,"address":{"@type":"PostalAddress","streetAddress":"Estado 215, oficina 1110","addressLocality":"Santiago","addressRegion":"Región Metropolitana","addressCountry":"CL"},"areaServed":{"@type":"Country","name":"Chile"},"openingHours":"Mo-Fr 09:00-18:00","sameAs":SOC},g=[org];
var o=S[k]||SUB[k];if(o){var url=SITE+"/"+PATHS[k],bc=[{"@type":"ListItem","position":1,"name":"Inicio","item":SITE+"/"}];
if(SUB[k])bc.push({"@type":"ListItem","position":2,"name":S["modificacion-estatutos"].n,"item":SITE+"/"+PATHS["modificacion-estatutos"]});
bc.push({"@type":"ListItem","position":bc.length+1,"name":o.n,"item":url});
g.push({"@type":"Service","name":o.st||o.n,"description":o.d,"url":url,"provider":{"@id":org["@id"]},"areaServed":{"@type":"Country","name":"Chile"},"offers":(S[k]?P[k]:subPlans(k)).map(function(p){return{"@type":"Offer","name":p.n,"price":p.pr,"priceCurrency":"CLP","url":url,"priceSpecification":{"@type":"PriceSpecification","price":p.pr,"priceCurrency":"CLP","valueAddedTaxIncluded":p.iva===0}}})});
g.push({"@type":"BreadcrumbList","itemListElement":bc});
}
return JSON.stringify({"@context":"https://schema.org","@graph":g})}
function meta(a,n,v){var e=document.querySelector('meta['+a+'="'+n+'"]');if(!e){e=document.createElement("meta");e.setAttribute(a,n);document.head.appendChild(e)}e.content=v}
function seo(k,t,d){var url=SITE+(k=="inicio"?"/":"/"+PATHS[k]);meta("property","og:title",t);meta("property","og:description",d);meta("property","og:url",url);meta("property","og:type","website");meta("property","og:site_name","Habilita tu PYME");meta("property","og:locale","es_CL");meta("property","og:image",SITE+"/icon-512.png");meta("name","twitter:card","summary");
var j=document.getElementById("ld");if(k=="404"){if(j)j.parentNode.removeChild(j);return}if(!j){j=document.createElement("script");j.type="application/ld+json";j.id="ld";document.head.appendChild(j)}j.textContent=ld(k)}
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
function nf(){return'<section><div class="w" style="max-width:640px;text-align:center"><div class="ill" style="margin-bottom:24px;min-height:140px"><b style="font:800 72px/1 Montserrat,sans-serif;color:#fff;letter-spacing:.04em">404</b></div><h1>Página no encontrada.</h1><p style="color:var(--mu);font-size:18px">Puede que el enlace haya cambiado o que el servicio ya no esté disponible.</p><div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:24px">'+A("inicio","Volver al inicio","btn bn")+'<a class="btn bo" target="_blank" rel="noopener" href="'+wa(WM["404"])+'">Contáctanos por WhatsApp</a></div></div></section>'}
function blog(){return'<section><div class="w" style="text-align:center;max-width:680px"><div class="ill" style="margin-bottom:24px">'+ic("bulb").replace("var(--ac)","#fff")+'</div><span class="tag">Blog</span><h1>Guías y tutoriales para emprender</h1><div class="card"><b>Sitio en construcción:</b> Pronto tendremos guías, ayudas y tutoriales preparados para potenciar tu negocio.</div><p>'+cta(WM.blog)+'</p></div></section>'}
function terms(){var t=[["1. Objeto","Habilita tu PYME presta servicios de asesoría y gestión de trámites de formalización empresarial en Chile."],["2. Contratación","El servicio se contrata por canales digitales y se paga por transferencia bancaria o mediante enlace de pago Webpay. El alcance y el valor se confirman por escrito antes de iniciar."],["3. Precios","Los valores publicados son referenciales y pueden variar según el caso. Los montos señalados con IVA se incrementan en el impuesto vigente. No incluyen aranceles de terceros."],["4. Obligaciones del cliente","El cliente entrega información veraz y completa. Los plazos dependen de la entrega oportuna de los antecedentes."],["5. Plazos","Los plazos son estimados y dependen también de organismos públicos y de terceros."],["6. Datos personales","Los datos se tratan conforme a la normativa chilena de protección de datos personales y se usan para prestar el servicio."],["7. Claves tributarias","Durante el proceso de modificación y de inicio de actividades podemos solicitar tus claves tributarias, con el fin de proporcionar un servicio integral. Nuestro equipo las utilizará solo para completar lo contratado. Será responsabilidad del cliente cambiarlas posteriormente, si así lo desea, una vez finalizado el proceso."],["8. Garantía de satisfacción","Ofrecemos garantía de satisfacción: si incumplimos algún servicio ofrecido y este no se cumple dentro de lo esperado, se podrá devolver hasta la totalidad del dinero, o nos encargaremos de pagar a la institución que corresponda lo generado por la situación, o condonaremos deudas o pagos pendientes que existiesen con nosotros. Cada situación será revisada particularmente."],["9. Responsabilidad","Nuestra responsabilidad se limita a la correcta ejecución del servicio contratado."],["10. Ley aplicable","Estos términos se rigen por las leyes de Chile y por los tribunales competentes."]];return'<section><div class="w" style="max-width:780px"><h1>Términos y condiciones</h1><p style="color:var(--mu)">Texto base referencial. Debe ser revisado por un abogado antes de publicarse.</p>'+t.map(function(x){return"<h3>"+x[0]+"</h3><p>"+x[1]+"</p>"}).join("")+'</div></section>'+endcta("¿Dudas sobre estos términos?",WM["terminos-y-condiciones"])}
function legal(){return'<section><div class="w" style="max-width:780px"><h1>Transparencia e información legal</h1><p style="color:var(--mu)">Datos de la empresa que presta los servicios de este sitio.</p><dl class="lg"><dt>Razón social</dt><dd>HABILITA TU PYME SPA</dd><dt>RUT</dt><dd>77.940.415-3</dd><dt>Giro</dt><dd>SERVICIOS DE CREACIONES DE EMPRESAS, CONTABILIDAD Y RELACIONADOS</dd><dt>Dirección</dt><dd><a href="'+MAP+'" target="_blank" rel="noopener">Estado 215, oficina 1110, Santiago Centro</a></dd><dt>Correo</dt><dd><a href="mailto:'+EM+'">'+EM+'</a></dd><dt>Representante legal</dt><dd>Edgard Antonio Gutiérrez Araya</dd><dt>Cédula de identidad</dt><dd>18.480.092-6</dd></dl></div></section>'+endcta("¿Tienes alguna consulta?",WM["informacion-legal"])}
/* Router */
function cur(){var s=PATHMODE?location.pathname.replace(/^\/+|\/+$/g,""):location.hash.slice(1);if(s==="")return"inicio";return SLUG[s]||"404"}
function route(){var k=cur(),h,t="Habilita tu PYME | Crear y modificar empresas en Chile",d="Creación de empresas, modificación de SpA, EIRL y SRL, oficina virtual, patente municipal y certificado digital en todo Chile, con asesoría gratuita.";
if(S[k]){h=svc(k);t=(S[k].st||S[k].t)+" | Habilita tu PYME";d=S[k].d}else if(SUB[k]){h=subPage(k);t=SUB[k].st+" | Habilita tu PYME";d=SUB[k].d}else if(k=="preguntas-frecuentes"){h=faq();t="Preguntas frecuentes | Habilita tu PYME";d="Resuelve tus dudas sobre creación y modificación de empresas en Empresa en un Día, oficina virtual, patente municipal y certificado digital."}else if(k=="blog"){h=blog();t="Blog | Habilita tu PYME"}else if(k=="terminos-y-condiciones"){h=terms();t="Términos y condiciones | Habilita tu PYME";d="Términos y condiciones de los servicios de asesoría y gestión de trámites empresariales de Habilita tu PYME en Chile."}else if(k=="informacion-legal"){h=legal();t="Información legal | Habilita tu PYME";d="Información legal de Habilita tu PYME SpA: razón social, RUT, giro, dirección y datos de contacto."}else if(k=="404"){h=nf();t="Página no encontrada | Habilita tu PYME";d="La página que buscas no existe o fue movida."}else{h=home()}
document.getElementById("app").innerHTML=h;document.title=t;document.querySelector('meta[name=description]').content=d;
var rb=document.querySelector('meta[name=robots]');if(k=="404"){if(!rb){rb=document.createElement("meta");rb.name="robots";document.head.appendChild(rb)}rb.content="noindex"}else if(rb)rb.parentNode.removeChild(rb);
if(PATHMODE){var c=document.querySelector('link[rel=canonical]');if(k=="404"){if(c)c.parentNode.removeChild(c)}else{if(!c){c=document.createElement("link");c.rel="canonical";document.head.appendChild(c)}c.href=SITE+(k=="inicio"?"/":"/"+PATHS[k])}}
seo(k,t,d);
document.getElementById("wfab").href=wa(msgFor(k));hdr(SUB[k]?"modificacion-estatutos":k);ftr();dr(0);
if(k=="inicio"){wiz()}if(k=="preguntas-frecuentes")fl();window.scrollTo(0,0)}
document.addEventListener("click",function(e){var a=e.target.closest?e.target.closest("a[data-r]"):null;
var pc=e.target.closest?e.target.closest("[data-wa]"):null;if(pc&&!e.target.closest("a")){window.open(pc.getAttribute("data-wa"),"_blank","noopener")}
if(a&&PATHMODE&&e.button===0&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey){e.preventDefault();history.pushState(null,"",a.getAttribute("href"));route()}
if(!(e.target.closest&&e.target.closest(".dd"))){var d=document.querySelector(".dd");if(d)d.classList.remove("open")}});
document.addEventListener("click",function(e){var el=e.target.closest?e.target.closest("[data-a]"):null;if(!el)return;var a=el.getAttribute("data-a"),v=el.getAttribute("data-v");var H={dr0:function(){dr(0)},dr1:function(){dr(1)},back:back,nx:nx,mail:sendMail,wa:sendWa,seg:function(){seg(+v)},p1:function(){p1(+v)},p2:function(){p2(+v)},cat:function(){cat=v;fl()},go:function(){var t=document.getElementById(v);if(t)t.scrollIntoView({behavior:"smooth"})},dd:function(){el.parentNode.classList.toggle("open")},top:function(){window.scrollTo({top:0,behavior:"smooth"})},again:function(){W={s:1,tipo:"",need:"",rut:"",n:"",e:"",t:""};wiz()}};if(H[a])H[a]()});
document.addEventListener("input",function(e){var t=e.target,k=t.getAttribute&&t.getAttribute("data-i");if(!k)return;if(k=="rut")t.value=W.rut=fmtRut(t.value);else W[k]=t.value});
addEventListener("hashchange",route);addEventListener("popstate",route);
addEventListener("scroll",function(){document.getElementById("top").classList.toggle("show",window.scrollY>300)});
route();
