// itemSelecionado(this,799,554,'Nota Natalense - Operações - Emitir NFS-e',464568221)
// menuOptions[5]

const stepsConfig = [
  {
    nextStepButtonId: '641703'
  },
  {
    nextStepButtonId: '641705'
  },
  {
    nextStepButtonId: '641704',
    // ! the following configs shall not be touched, keeping even the invisible characters.
    operationNature: 'Tributação no município de Natal - O ISS obrigatoriamente deverá ser recolhido para o município de Natal.',
    serviceType: '10.08 - AGENCIAMENTO DE PUBLICIDADE E PROPAGANDA, INCLUSIVE O AGENCIAMENTO DE VEICULAÇÃO POR QUAISQUER MEIOS.',
    cnae: '73.19-0/03 - MARKETING DIRETO',
  },
  {
    nextStepButtonId: '641701'
  },
  {
    nextStepButtonId: '641702'
  },
]

function openModal() {

  const menuOptions = document.getElementById("formsmenu14").getElementsByTagName("li");

  for (let index = 0; index < menuOptions.length; index++) {
    const currentOption = menuOptions[index];
    const menuOptionText = currentOption
      .getElementsByTagName("a")[0]
      .getElementsByTagName("span")[0]
      .childNodes[0]
      .data;

    if (menuOptionText.includes("Emitir NFS-e")) {
      currentOption.click();
      break;
    }
  }
}

function clickOnWeirdButton(nextStepButtonId) {
  // this buttons are not directly clickable
  const button = document.getElementById(`HTMLButton${nextStepButtonId}`);
  button.getElementsByTagName("a")[0].click();
}

function serviceTaker(serviceTakerInfo) {
  const serviceTakerTypeSelector = document.getElementById("HTMLGroupBox641831");
  if (!serviceTakerInfo) {
    serviceTakerTypeSelector.getElementsByClassName("label")[2].click();
    return;
  }
  serviceTakerTypeSelector.getElementsByClassName("label")[1].click();
  // todo: add code to handle taker indentification
}

function serviceAttributes() {
  // todo: missing date
  const operationNatureInput = document.getElementsByName("WFRInput641754Show")[0];
  operationNatureInput.value = stepsConfig[2].operationNature;

  const serviceTypeInput = document.getElementsByName("WFRInput641753Show")[0];
  serviceTypeInput.value = stepsConfig[2].serviceType;

  const cnaeInput = document.getElementsByName("WFRInput641753Show")[0];
  cnaeInput.value = stepsConfig[2].cnae;
}

function createNewService(serviceInformation) {
  const descriptionInput = document.getElementsByName("WFRInput641832")[0];
  descriptionInput.value = serviceInformation.description;

  const quantityInput = document.getElementsByName("WFRInput641876")[0];
  quantityInput.value = serviceInformation.quantity;

  const priceInput = document.getElementsByName("WFRInput641874")[0];
  priceInput.value = serviceInformation.price;

  // Incluir
  clickOnWeirdButton("641692")

  const serviceTakerTypeSelector = document.getElementById("HTMLGroupBox777401");
  serviceTakerTypeSelector.getElementsByClassName("label")[1].click();
}

function main() {
  openModal();
  clickOnWeirdButton(stepsConfig[0].nextStepButtonId);

  serviceTaker();
  clickOnWeirdButton(stepsConfig[1].nextStepButtonId);

  serviceAttributes();
  clickOnWeirdButton(stepsConfig[2].nextStepButtonId);

  createNewService()
  clickOnWeirdButton(stepsConfig[3].nextStepButtonId);

  // todo: add the option of inserting custom description
  clickOnWeirdButton(stepsConfig[4].nextStepButtonId);

  // generate NFS-e || gerar NFS-e
  clickOnWeirdButton('659336');
}
