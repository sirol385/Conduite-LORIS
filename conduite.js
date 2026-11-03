const SCHOOL = { name: "St-François d'Assise", ville: 'La Roche-sur-Yon', aller: 17, ar: 34, tAller: '25 min', tAR: '50 min', conso: 13 }
const BRIO_GEL = { name: "Brio'Gel", ville: 'Montaigu-Vendée', aller: 55, ar: 110, tAller: '50 min', tAR: '1h40', conso: 14.5 };
const SEPTEMBRE_2026 = {1:"cfa", 2:"cfa", 3:"cfa", 4:"cfa", 5:"repos", 6:"repos", 7:"cfa", 8:"cfa", 9:"cfa", 10:"cfa", 11:"cfa", 12:"repos", 13:"repos", 14:"entreprise", 15:"entreprise", 16:"entreprise", 17:"entreprise", 18:"entreprise", 19:"repos", 20:"repos", 21:"entreprise", 22:"entreprise", 23:"entreprise", 24:"entreprise", 25:"entreprise", 26:"repos", 27:"repos", 28:"cfa", 29:"cfa", 30:"cfa"};
const OCTOBRE_2026 = {1:"cfa", 2:"cfa", 3:"repos", 4:"repos", 5:"cfa", 6:"cfa", 7:"cfa", 8:"cfa", 9:"cfa", 10:"repos", 11:"repos", 12:"entreprise", 13:"entreprise", 14:"entreprise", 15:"entreprise", 16:"entreprise", 17:"repos", 18:"repos", 19:"entreprise", 20:"entreprise", 21:"entreprise", 22:"entreprise", 23:"entreprise", 24:"repos", 25:"repos", 26:"entreprise", 27:"entreprise", 28:"entreprise", 29:"entreprise", 30:"entreprise", 31:"repos"};
const NOVEMBRE_2026 = {1:"repos", 2:"cfa", 3:"cfa", 4:"cfa", 5:"cfa", 6:"cfa", 7:"repos", 8:"repos", 9:"cfa", 10:"cfa", 11:"repos", 12:"cfa", 13:"cfa", 14:"repos", 15:"repos", 16:"entreprise", 17:"entreprise", 18:"entreprise", 19:"entreprise", 20:"entreprise", 21:"repos", 22:"repos", 23:"entreprise", 24:"entreprise", 25:"entreprise", 26:"entreprise", 27:"entreprise", 28:"repos", 29:"repos", 30:"cfa"};
const DECEMBRE_2026 = {1:"cfa", 2:"cfa", 3:"cfa", 4:"cfa", 5:"repos", 6:"repos", 7:"cfa", 8:"cfa", 9:"cfa", 10:"cfa", 11:"cfa", 12:"repos", 13:"repos", 14:"entreprise", 15:"entreprise", 16:"entreprise", 17:"entreprise", 18:"entreprise", 19:"repos", 20:"repos", 21:"entreprise", 22:"entreprise", 23:"entreprise", 24:"entreprise", 25:"repos", 26:"repos", 27:"repos", 28:"entreprise", 29:"entreprise", 30:"entreprise", 31:"entreprise"};
const JANVIER_2027 = {1:"repos", 2:"repos", 3:"repos", 4:"entreprise", 5:"entreprise", 6:"entreprise", 7:"entreprise", 8:"entreprise", 9:"repos", 10:"repos", 11:"cfa", 12:"cfa", 13:"cfa", 14:"cfa", 15:"cfa", 16:"repos", 17:"repos", 18:"cfa", 19:"cfa", 20:"cfa", 21:"cfa", 22:"cfa", 23:"repos", 24:"repos", 25:"entreprise", 26:"entreprise", 27:"entreprise", 28:"entreprise", 29:"entreprise", 30:"repos", 31:"repos"};
const FEVRIER_2027 = {1:"entreprise", 2:"entreprise", 3:"entreprise", 4:"entreprise", 5:"entreprise", 6:"repos", 7:"repos", 8:"cfa", 9:"cfa", 10:"cfa", 11:"cfa", 12:"cfa", 13:"repos", 14:"repos", 15:"entreprise", 16:"entreprise", 17:"entreprise", 18:"entreprise", 19:"entreprise", 20:"repos", 21:"repos", 22:"entreprise", 23:"entreprise", 24:"entreprise", 25:"entreprise", 26:"entreprise", 27:"repos", 28:"repos"};
const MARS_2027 = {1:"entreprise", 2:"entreprise", 3:"entreprise", 4:"entreprise", 5:"entreprise", 6:"repos", 7:"repos", 8:"cfa", 9:"cfa", 10:"cfa", 11:"cfa", 12:"cfa", 13:"repos", 14:"repos", 15:"entreprise", 16:"entreprise", 17:"entreprise", 18:"entreprise", 19:"entreprise", 20:"repos", 21:"repos", 22:"entreprise", 23:"entreprise", 24:"entreprise", 25:"entreprise", 26:"entreprise", 27:"repos", 28:"repos", 29:"cfa", 30:"cfa", 31:"cfa"};
const AVRIL_2027 = {1:"cfa", 2:"cfa", 3:"repos", 4:"repos", 5:"cfa", 6:"cfa", 7:"cfa", 8:"cfa", 9:"cfa", 10:"repos", 11:"repos", 12:"entreprise", 13:"entreprise", 14:"entreprise", 15:"entreprise", 16:"entreprise", 17:"repos", 18:"repos", 19:"entreprise", 20:"entreprise", 21:"entreprise", 22:"entreprise", 23:"entreprise", 24:"repos", 25:"repos", 26:"entreprise", 27:"entreprise", 28:"entreprise", 29:"entreprise", 30:"entreprise"};
const MAI_2027 = {1:"repos", 2:"repos", 3:"cfa", 4:"cfa", 5:"cfa", 6:"repos", 7:"repos", 8:"repos", 9:"repos", 10:"cfa", 11:"cfa", 12:"cfa", 13:"cfa", 14:"cfa", 15:"repos", 16:"repos", 17:"entreprise", 18:"entreprise", 19:"entreprise", 20:"entreprise", 21:"entreprise", 22:"repos", 23:"repos", 24:"entreprise", 25:"entreprise", 26:"entreprise", 27:"entreprise", 28:"entreprise", 29:"repos", 30:"repos", 31:"cfa"};
const JUIN_2027 = {1:"cfa", 2:"cfa", 3:"cfa", 4:"cfa", 5:"repos", 6:"repos", 7:"cfa", 8:"cfa", 9:"cfa", 10:"cfa", 11:"cfa", 12:"repos", 13:"repos", 14:"entreprise", 15:"entreprise", 16:"entreprise", 17:"entreprise", 18:"entreprise", 19:"repos", 20:"repos", 21:"cfa", 22:"cfa", 23:"cfa", 24:"cfa", 25:"cfa", 26:"repos", 27:"repos", 28:"cfa", 29:"cfa", 30:"cfa"};
const JUILLET_2027 = {1:"cfa", 2:"cfa", 3:"repos", 4:"repos", 5:"entreprise", 6:"entreprise", 7:"entreprise", 8:"entreprise", 9:"entreprise", 10:"repos", 11:"repos", 12:"entreprise", 13:"entreprise", 14:"repos", 15:"entreprise", 16:"entreprise", 17:"repos", 18:"repos", 19:"entreprise", 20:"entreprise", 21:"entreprise", 22:"entreprise", 23:"entreprise", 24:"repos", 25:"repos", 26:"entreprise", 27:"entreprise", 28:"entreprise", 29:"entreprise", 30:"entreprise", 31:"repos"};
const AOUT_2027 = {1:"repos", 2:"entreprise", 3:"entreprise", 4:"entreprise", 5:"entreprise", 6:"entreprise", 7:"repos", 8:"repos", 9:"entreprise", 10:"entreprise", 11:"entreprise", 12:"entreprise", 13:"entreprise", 14:"repos", 15:"repos", 16:"entreprise", 17:"entreprise", 18:"entreprise", 19:"entreprise", 20:"entreprise", 21:"repos", 22:"repos", 23:"entreprise", 24:"entreprise", 25:"entreprise", 26:"entreprise", 27:"entreprise", 28:"repos", 29:"repos", 30:"entreprise", 31:"entreprise"};
const MOIS_DATA = [["Septembre 2026",SEPTEMBRE_2026,2026,8],["Octobre 2026",OCTOBRE_2026,2026,9],["Novembre 2026",NOVEMBRE_2026,2026,10],["Décembre 2026",DECEMBRE_2026,2026,11],["Janvier 2027",JANVIER_2027,2027,0],["Février 2027",FEVRIER_2027,2027,1],["Mars 2027",MARS_2027,2027,2],["Avril 2027",AVRIL_2027,2027,3],["Mai 2027",MAI_2027,2027,4],["Juin 2027",JUIN_2027,2027,5],["Juillet 2027",JUILLET_2027,2027,6],["Août 2027",AOUT_2027,2027,7]];
const ANNEES = [
    { label: 'Année 1', periode: 'sept. 2026 → août 2027', daysSchool: 96,  daysCompany: 159, daysConges: 25, daysRepos: 110 },
    { label: 'Année 2', periode: 'sept. 2027 → août 2028', daysSchool: 100, daysCompany: 175, daysConges: 30, daysRepos: 91 },];
const CONSO_L100 = 6; const PRIX_LITRE = 2; 
const PRIX_KWH_BASE = 0.2001;
const VOITURES = [
    {   name: 'Renault Twingo E-Tech Électrique', sub: 'Évolution · Autonomie Urbaine · Jaune Mango · 2026',
        url: 'https://www.renault.fr/vehicules-electriques/twingo-e-tech-electrique/offre-twingo.html',
        chargemap: 'https://chargemap.com/fr-fr',
        brochure: 'https://e-brochure.renault.fr/twingo/mobile/m_ebro_renault_twingo_etech_fr_janvier_2026.pdf',
        localPhotos: ['VERSION-TECHNO-1.png','VERSION-TECHNO-2.png','VERSION-TECHNO-3.png','VERSION-TECHNO-4.png','VERSION-TECHNO-5.png','VERSION-EVOLUTION-1.png','VERSION-EVOLUTION-2.png','VERSION-EVOLUTION-3.png','VERSION-EVOLUTION-4.png','VERSION-EVOLUTION-5.png',],
specs: [    ['Puissance',           '60 kW / 80 ch'],
            ['Puissance fiscale',   '3 CV'],
            ['Couple',              '175 Nm'],
            ['0–100 km/h',          '12,1 s'],
            ['Vitesse max',         '130 km/h'],
            ['Diamètre de braquage ','9.87 m'],
            ['Transmission',        'Traction'],
            ['Pneumatiques',        '195/60 R16'],
            ['Autonomie WLTP',      '263 km'],
            ['Batterie',            '27,5 kWh LFP'],
            ['Conso. WLTP',         '12,2 kWh/100 km'],
            ['Charge AC',           'jusqu\'à 6,6 kW'],
            ['Longueur',            '3 789 mm'],
            ['Largeur (rétro)',     '1 953 mm'],
            ['Hauteur',             '1 491 mm'],
            ['Poids',               '1 280 kg'],
            ['Coffre mini',         '305 L'],
            ['Coffre maxi',         '966 L'],
            ['Places',              '4'],
            ['Portes',              '5'],],
prixBase: [ ['Prix catalogue',                     19490.00],
            ['Prime CEE',                          -3620.00],
            ['Roole Integral tva20',               179.00],
            ['Roole Integral tvaexo',              150.00],
            ['Taxe de gestion et redevance envoi', 13.76],
            ['Certificat immatriculation',         153.00],
            ['Démarches immatriculation',          199.00],
            ['<a href="https://www.amazon.fr/gp/product/B0DGT8PRHH/ref=ox_sc_act_title_1?smid=A5RN6IP9XQWBZ&psc=1" target="_blank" rel="noopener" class="prix-link">Chargeur dé APP 7m 3,7kW</a>',  119.95],
            ['<a href="https://www.tailleurauto.com/6-tapis-auto/874-renault/4131-twingo-e-tech" target="_blank" rel="noopener" class="prix-link">Tapis conducteur et passagers</a>',  54.90],],
notes: [    '🎨 Jaune Mango · Sellerie textile noir micro‑pixels blancs · Ciel de toit gris clair chiné',
            '📱 OpenR link 10,1" · Tableau de bord numérique 7" · Contrôle smartphone sans fil · Mises à jour FOTA 5 ans',
            '🛡️ Freinage auto d’urgence · ABS · Airbags frontaux/latéraux/rideaux · Appel d’urgence',
            '🚨 Détection vigilance conducteur · Avertisseur distance · Reconnaissance panneaux + alerte survitesse',
            '🧭 Assistant maintien voie + correction trajectoire d’urgence · Régulateur/limiteur de vitesse',
            '🅿️ Aide au parking arrière · Allumage auto des phares · Capteur de luminosité',
            '🚗 Assistance démarrage en côte · Frein de parking électrique · Mode Éco',
            '🔋 Mode B (freinage régénératif renforcé) · Optimisation autonomie · Gestion intelligente de la récupération',
            '⚡ Chargeur AC 6,6 kW · Câble mode 3 (5 m) inclus',
            '📦 Coffre 305–966 L · Sièges arrière coulissants 50/50 · Rétros électriques dégivrants',
            '🔧 Maintenance connectée 8 ans · Kit réparation pneumatiques · App My Renault',]},];
function showSection(sectionId, button) {
    document.querySelectorAll('.section, .section-voiture').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const el = document.getElementById(sectionId);
    el.classList.add('active');
    button.classList.add('active');
    document.getElementById('pageTitle').innerHTML = sectionTitles[sectionId] || sectionId;}
function animateSection(sectionId) {
    if (sectionId === 'alternance') {
        document.querySelectorAll('.data-table tbody tr, .alt-table tbody tr').forEach((tr, i) => {
            tr.classList.remove('anim-row');
            void tr.offsetWidth;
            tr.style.animationDelay = (i * 0.035) + 's';
            tr.classList.add('anim-row');}); }}
function initAlternance() {
    const lieuxBody = document.getElementById('lieuxBody');
    const schoolRow = `<tr class="row-school"><td>🏫 ${SCHOOL.name}</td><td>${SCHOOL.ville}</td><td>${SCHOOL.aller} km</td><td>${SCHOOL.ar} km</td><td>${SCHOOL.tAller}</td><td>${SCHOOL.tAR}</td><td>${SCHOOL.conso.toString().replace('.',',')} kWh</td></tr>`;
    const companyRows = [BRIO_GEL].map(c =>
            `<tr class="row-company" data-ar="${c.ar}"><td>🏢 ${c.name}</td><td>${c.ville}</td><td>${c.aller} km</td><td>${c.ar} km</td><td>${c.tAller}</td><td>${c.tAR}</td><td>${c.conso.toString().replace('.',',')} kWh</td></tr>`
        ).join('');
        lieuxBody.innerHTML = schoolRow + companyRows;
    const repartBody = document.getElementById('repartitionBody');
        const y1 = { cfa:0, entreprise:0, repos:0 };
    MOIS_DATA.forEach(([,data]) => { Object.values(data).forEach(t => { if(y1[t]!==undefined) y1[t]++; }); });
    ANNEES[0].daysSchool = y1.cfa;
    ANNEES[0].daysCompany = y1.entreprise;
    ANNEES[0].daysRepos = y1.repos;
    repartBody.innerHTML = ANNEES.map((a, i) => {        const rowClass = 'row-company';
        return `<tr class="${rowClass}" data-days-school="${a.daysSchool}" data-days-company="${a.daysCompany}" data-daysConges="${a.daysConges}">            <td>${a.label} <span style="font-size:0.85em;color:#999">(${a.periode})</span></td>
            <td class="cell-school">${a.daysSchool} j</td>
            <td class="cell-company">${a.daysCompany} j</td>
            <td class="cell-leave">${a.daysConges} j</td>
            <td style="font-weight:bold;">${a.daysRepos} j</td>
        </tr>`;
    }).join('');
    renderKm(BRIO_GEL);
}
function renderKm(company) {
    const fmt = n => n.toLocaleString('fr-FR');
    let totalSchool2ans = 0, totalCompany2ans = 0, totalJours2ans = 0;
    ANNEES.forEach(a => {
        const daysNet   = Math.max(0, a.daysCompany - a.daysConges);
        const kmSchool  = a.daysSchool * SCHOOL.ar;
        const kmCompany = daysNet * company.ar;
        totalSchool2ans  += kmSchool;
        totalCompany2ans += kmCompany;
        totalJours2ans   += a.daysSchool + daysNet;
    });
    const totalAll = totalSchool2ans + totalCompany2ans;
    document.getElementById('kmResults').innerHTML = `
        <div class="result-box"><div class="result-label">🏫 Km école</div><div class="result-value">${fmt(totalSchool2ans)} km</div><div class="result-sub">${ANNEES.map(a=>a.daysSchool+'j').join(' + ')} × ${SCHOOL.ar} km</div></div>
        <div class="result-box green"><div class="result-label">🏢 Km entreprise</div><div class="result-value">${fmt(totalCompany2ans)} km</div><div class="result-sub">${ANNEES.map(a=>Math.max(0,a.daysCompany-a.daysConges)+'j').join(' + ')} × ${company.ar} km</div></div>
        <div class="result-box orange"><div class="result-label">🚗 Total</div><div class="result-value">${fmt(totalAll)} km</div><div class="result-sub">${totalJours2ans} jours travaillés</div></div>
    `;
    renderFuel(company);
}
function renderFuel(company) {
    const fmt    = n => n.toLocaleString('fr-FR');
    const fmtEur = n => n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    let kmSchool2ans = 0, kmCompany2ans = 0;
    ANNEES.forEach(a => {
        const daysNet = Math.max(0, a.daysCompany - a.daysConges);
        kmSchool2ans  += a.daysSchool * SCHOOL.ar;
        kmCompany2ans += daysNet * company.ar;
    });
    const totalKm2ans     = kmSchool2ans + kmCompany2ans;
    const liters2ans      = (totalKm2ans * CONSO_L100) / 100;
    const coutEssence2ans = liters2ans * PRIX_LITRE;
    const coutElec2ans    = (kmSchool2ans * SCHOOL.conso / 100 + kmCompany2ans * company.conso / 100) * PRIX_KWH_BASE;
    const economies2ans   = coutEssence2ans - coutElec2ans;
    const consoMoyenne = (kmSchool2ans * SCHOOL.conso + kmCompany2ans * company.conso) / totalKm2ans;
document.getElementById('fuelResults').innerHTML = `
    <div class="result-box green"><div class="result-label">⛽ Coût essence</div><div class="result-value">${fmtEur(coutEssence2ans)} €</div><div class="result-sub">${CONSO_L100} L/100 · ${PRIX_LITRE.toFixed(2).replace('.',',')} €/L</div></div>
    <div class="result-box yellow"><div class="result-label">⚡ Recharge maison</div><div class="result-value">${fmtEur(coutElec2ans)} €</div><div class="result-sub">~${consoMoyenne.toFixed(1).replace('.',',')} kWh/100 · ${PRIX_KWH_BASE.toString().replace('.',',')} €/kWh</div></div>
    <div class="result-box blue"><div class="result-label">💵 Économies réalisées</div><div class="result-value">${fmtEur(economies2ans)} €</div><div class="result-sub">Comparatif carburant/électrique</div></div>
`;
}
function renderCalendrier(){
  const wrap=document.getElementById('calendrierWrap');
  wrap.innerHTML='';
  wrap.className='calendrier-row';
  const jours=['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
  MOIS_DATA.forEach(([label,data,year,month])=>{
    const col=document.createElement('div');
    col.className='calendrier-mois-col';
    col.innerHTML=`<div class="calendrier-mois-titre">${label}</div>`;
    const table=document.createElement('table');
    table.className='calendrier-table';
    const tbody=document.createElement('tbody');
    Object.keys(data).forEach(day=>{
      const type=data[day];
      const cur=new Date(year,month,Number(day));
      const tr=document.createElement('tr');
      tr.className='jour-'+type;
      tr.innerHTML=`<td>${jours[cur.getDay()]}</td><td>${String(day).padStart(2,'0')}</td>`;
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    col.appendChild(table);
    wrap.appendChild(col);
  });
    let isDown=false, startX, scrollLeft;
  wrap.addEventListener('mousedown', e=>{ isDown=true; startX=e.pageX; scrollLeft=wrap.scrollLeft; });
  wrap.addEventListener('mouseleave', ()=> isDown=false);
  wrap.addEventListener('mouseup', ()=> isDown=false);
  wrap.addEventListener('mousemove', e=>{
    if(!isDown) return;
    e.preventDefault();
    wrap.scrollLeft = scrollLeft - (e.pageX - startX);
  });
}
function buildPrix(prixBase) {
    const fmtEur = n => {
        const abs = Math.abs(n).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return (n < 0 ? '− ' : '') + abs + ' €';
    };
    const total = prixBase.reduce((s, [, v]) => s + v, 0);
    return [
        ...prixBase.map(([l, v]) => [l, fmtEur(v)]),
        ['💰 Total TTC', fmtEur(total)],
    ];
}
let lbGallery = [];
let lbIndex = 0;
function lbTrapTab(e) { if (e.key === 'Tab') e.preventDefault(); }
function openLightbox(gallery, index, light) {
    lbGallery = gallery;
    lbIndex = index;
    lightbox.classList.toggle('lb-light', !!light);
    document.getElementById('lbImg').src = lbGallery[lbIndex];
    document.getElementById('lbPrev').style.display = gallery.length > 1 ? '' : 'none';
    document.getElementById('lbNext').style.display = gallery.length > 1 ? '' : 'none';
    lightbox.classList.add('lb-show');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', lbTrapTab);
}
function closeLightbox() {
    lightbox.classList.remove('lb-show');
    lightbox.classList.remove('lb-light');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', lbTrapTab);
}
function lbShowAt(i) {
    if (!lbGallery.length) return;
    lbIndex = (i + lbGallery.length) % lbGallery.length;
    document.getElementById('lbImg').src = lbGallery[lbIndex];
}
function lbPrev() { lbShowAt(lbIndex - 1); }
function lbNext() { lbShowAt(lbIndex + 1); }
function initVoiture() {
    const container = document.getElementById('voitureCards');
    container.innerHTML = VOITURES.map(v => {
    const prix = buildPrix(v.prixBase);
    return `
        <div class="voiture-cards-full">
            <div class="voiture-cards-header">
                <div>
                    <div class="voiture-name">${v.name}</div>
                    <div class="voiture-sub">${v.sub}</div>
                </div>
            </div>
            <div class="voiture-gallery">
                ${v.localPhotos.map((p, i) => `<img src="${p}" alt="Photo ${i+1}" class="voiture-photo" loading="lazy" onclick='openLightbox(${JSON.stringify(v.localPhotos)}, ${i})'>`).join('')}
            </div>
            <div class="voiture-body-grid">
                    <div class="voiture-body-left">
                        <h2 class="voiture-section-label voiture-section-label-first">Caractéristiques techniques</h2>
                        <div class="voiture-specs voiture-specs-wide">
                            ${v.specs.map(([l,val]) => `<div class="spec-item"><span class="spec-label">${l}</span><span class="spec-value">${val}</span></div>`).join('')}
                        </div>
                        <div class="voiture-livraison">
                            📦 Livraison des clés faites le<strong> Mardi 08 Septembre 2026</strong>
                        </div>
                    </div>
                <div class="voiture-body-right">
                    <h2 class="voiture-section-label">Détail du prix TTC</h2>
                    <table class="prix-table">
                        ${prix.map(([l,val]) => {
                            const isTotal = l.startsWith('💰');
                            const isMinus = val.startsWith('−');
                            return `<tr class="${isTotal ? 'prix-total' : ''}">
                                <td class="prix-label">${l}</td>
                                <td class="prix-val${isMinus ? ' prix-minus' : isTotal ? ' prix-highlight' : ''}">${val}</td>
                            </tr>`;
                        }).join('')}
                    </table>
                </div>
            </div>
                        <div class="voiture-notes">
                            <h2 class="voiture-section-label">Équipements &amp; options</h2>
                            ${v.notes.map(n => `<div class="voiture-note">${n}</div>`).join('')}
                        </div>
            <div class="voiture-links">
                <a class="voiture-link-btn voiture-link-url" href="${v.url}" target="_blank" rel="noopener">🌐 Site officiel</a>
                ${v.chargemap
                    ? `<a class="voiture-link-btn voiture-link-chargemap" href="${v.chargemap}" target="_blank" rel="noopener">🔌ChargeMap</a>`
                    : `<span class="voiture-link-chargemap voiture-link-disabled">🔧 chargemap</span>`}
                ${v.brochure
                    ? `<a class="voiture-link-btn voiture-link-brochure" href="${v.brochure}" target="_blank" rel="noopener">📄 Brochure</a>`
                    : `<span class="voiture-link-btn voiture-link-brochure voiture-link-disabled">📄 Brochure</span>`}
            </div>
        </div>
    `;
    }).join('');
}
const lightbox = document.createElement('div');
const sectionTitles = {
    alternance: '<span class="car-emoji">💼</span> Alternance',
    voiture:    '<span class="car-emoji">🚗</span> Voiture',};
history.scrollRestoration = 'manual';
window.addEventListener('pageshow', () => window.scrollTo({ top: 0, behavior: 'instant' }));
lightbox.id = 'lightbox';
lightbox.innerHTML = `<button class="lb-nav lb-prev" id="lbPrev" aria-label="Photo précédente">‹</button><img id="lbImg" src="" alt=""><button class="lb-nav lb-next" id="lbNext" aria-label="Photo suivante">›</button><button class="lb-close" id="lbClose" aria-label="Fermer">✕</button>`;
document.body.appendChild(lightbox);
document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', e => { e.stopPropagation(); lbPrev(); });
document.getElementById('lbNext').addEventListener('click', e => { e.stopPropagation(); lbNext(); });
lightbox.addEventListener('click', e => { if (e.target === lightbox) e.stopPropagation(); });
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('mentionsModal');
    const closeBtn = document.querySelector('.close-btn');
    const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    let _triggerEl = null, _trapHandler = null;
    window.openModal = function () {
        _triggerEl = document.activeElement;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => { modal.classList.add('show'); });
        document.querySelectorAll('body > *').forEach(el => {
            if (el !== modal && !el.contains(modal)) { el.setAttribute('inert', ''); el.setAttribute('data-was-inert', ''); }
        });
        _trapHandler = function(e) { if (e.key === 'Tab') e.preventDefault(); };
        document.addEventListener('keydown', _trapHandler);
    };
    window.closeModal = function () {
        if (_trapHandler) { document.removeEventListener('keydown', _trapHandler); _trapHandler = null; }
        document.querySelectorAll('[data-was-inert]').forEach(el => { el.removeAttribute('inert'); el.removeAttribute('data-was-inert'); });
        modal.classList.remove('show');
        document.body.style.overflow = '';
        setTimeout(() => { modal.style.display = 'none'; }, 100);
        if (_triggerEl && typeof _triggerEl.focus === 'function') { _triggerEl.focus(); _triggerEl = null; }
    };
    closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
        if (e.key === 'Escape' && lightbox.classList.contains('lb-show')) closeLightbox();
        if (lightbox.classList.contains('lb-show')) {
            if (e.key === 'ArrowLeft') lbPrev();
            if (e.key === 'ArrowRight') lbNext();
        }
    });
    initAlternance();
    initVoiture();
    renderCalendrier();
    animateSection('alternance');
});