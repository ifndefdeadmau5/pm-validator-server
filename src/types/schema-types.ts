export type NodeAttrs = {
  paragraph: {
    id: never;
  };
  multipleChoiceItemParagraph: {
    id: never;
  };
  shortAnswerItemParagraph: {
    id: never;
  };
  shortAnswerAlternativeItemParagraph: {
    id: any;
  };
  targetingQuiz: {
    id: any;
    index: any;
    text: any;
    isTarget: any;
    items: any;
  };
  targetingQuizOption: {
    id: any;
    text: any;
  };
  blankQuiz: {
    id: any;
    options: any[];
    index: number;
    init: boolean;
    singleOption: boolean;
    studentAnswer: any;
  };
  blankQuizV2: {
    id: any;
    alternativeAnswers: any[];
    isMathFormula: boolean;
    options: any[];
    index: number;
    init: boolean;
    singleOption: boolean;
    studentAnswer: any;
  };
  matchingQuiz: {
    id: any;
    options: any[];
    index: number;
    init: boolean;
    singleOption: boolean;
  };
  selectionQuiz: {
    id: any;
    options: any[];
    index: number;
    open: boolean;
    pending: boolean;
    deleted: boolean;
    originalText: string;
    studentAnswer: any;
  };
  blockquote: {
    id: never;
  };
  codeBlock: {
    language: any;
  };
  doc: {
    id: never;
  };
  hardBreak: {
    id: never;
  };
  horizontalRule: {
    id: never;
  };
  listItem: {
    id: never;
  };
  text: {
    id: never;
  };
  heading: {
    id: any;
    "data-toc-id": any;
    level: number;
    placeholder: string;
  };
  fileUploader: {
    src: any;
    name: any;
    isInsertMiddleOfText: boolean;
    mousePosition: any;
    alt: any;
    nodeAttrs: any;
  };
  file: {
    id: any;
    parentNodeId: string;
    src: any;
    name: any;
    fileSize: number;
    type: any;
  };
  imageUploader: {
    src: any;
    alt: any;
    title: any;
    isInsertMiddleOfText: boolean;
  };
  image: {
    id: any;
    src: any;
    alt: any;
    title: any;
    "data-uploaded": boolean;
    width: number;
    height: number;
    maxWidth: number;
    alignment: string;
    script: any;
    imagePreview: boolean;
  };
  audio: {
    id: any;
    audioSrc: any;
    duration: any;
    subtitleFileIds: any;
    subtitleFiles: any;
  };
  video: {
    id: any;
    parentNodeId: any;
    src: any;
    duration: any;
    subtitleFileIds: any;
    subtitleFiles: any;
    watchTime: any;
    playedPercent: any;
    status: any;
  };
  math_inline: {
    id: never;
  };
  math_display: {
    id: never;
  };
  mathAnswerBlock: {
    id: any;
    latex: string;
  };
  "chart-node": {
    id: any;
    chartType: any;
    width: any;
    height: any;
    margin: any;
    xStep: any;
    xLabel: any;
    yLabel: any;
    xMin: any;
    xMax: any;
    showXBreakScale: any;
    showYBreakScale: any;
    yBreakScaleStart: any;
    yBreakScaleEnd: any;
    yStep: any;
    ySnapGap: any;
    yMax: any;
    xUnit: any;
    yUnit: any;
    title: any;
    correctAnswers: any;
    studentAnswers: any;
    categories: any;
  };
  graph: {
    id: any;
    mode: any;
    studentAnswers: any;
    notNullAnswerResult: any;
    graphData: any;
    parseHTML: any;
    renderHTML: any;
  };
  multipleChoiceList: {
    id: any;
    listItemStyle: string;
    checkPolicy: string;
  };
  multipleChoiceWithoutGradingList: {
    id: any;
    listItemStyle: string;
    enableSingleSelect: boolean;
    hideHelpText: boolean;
  };
  multipleChoiceItem: {
    id: any;
    checked: boolean;
    studentChecked: boolean;
    isGrading: boolean;
  };
  shortAnswerList: {
    id: any;
    listItemStyle: string;
    educationLevel: string;
    isAnswerCountHidden: boolean;
    isAnswersJudgedInAnyOrder: boolean;
    isReadyToSubmit: boolean;
    studentAnswers: any;
    studentAnswerTypes: any;
  };
  shortAnswerAlternativeItem: {
    id: any;
  };
  shortAnswerAlternativeList: {
    id: any;
  };
  shortAnswerItem: {
    id: any;
    mode: string;
  };
  targetingQuizBlock: {
    id: any;
    checkPolicy: any;
    solution: any;
    studentAnswers: any;
  };
  blankQuizBlock: {
    id: any;
    hintOption: any;
    studentAnswers: any;
    solution: any;
  };
  blankQuizV2Block: {
    id: any;
    hintOption: any;
    blankStyle: any;
    studentAnswers: any;
    solution: any;
    educationLevel: any;
  };
  matchingQuizBlock: {
    id: any;
    hintOption: any;
    studentAnswers: any;
    solution: any;
  };
  selectionQuizBlock: {
    id: any;
    shuffleOption: any;
    proofReading: any;
    solution: any;
    incomplete: any;
  };
  essay: {
    id: any;
    studentAnswer: any;
    enableEmptyStudentAnswer: boolean;
    hideHelpText: boolean;
  };
  shortAnswerWithoutGrading: {
    id: any;
    studentAnswer: any;
    enableEmptyStudentAnswer: boolean;
    hideHelpText: boolean;
  };
  explanation: {
    id: any;
  };
  speaking: {
    id: any;
    sttId: any;
    sttResult: any;
    src: any;
    status: any;
    enableTranscription: any;
    maxRecordTime: any;
  };
  englishParagraphBlock: {
    id: any;
    parentNodeId: any;
    src: any;
    previousTextContent: any;
  };
  classEmbed: {
    id: any;
  };
  toggle: {
    id: string;
    a11yId: string;
    parentNodeId: string;
    open: boolean;
  };
  toggleSummary: {
    id: any;
    open: boolean;
    hover: boolean;
  };
  toggleContent: {
    id: any;
    open: boolean;
  };
  sticky: {
    id: any;
  };
  externalEmbedded: {
    id: any;
    imbeddedType: any;
    algeoMathOption: any;
    linkSrc: any;
    customActivityId: string;
    mode: string;
    learningActivityId: string;
    fileId: string;
    algeoMathStudentAnswerUrl: any;
    isInStudySyncScreen: boolean;
  };
  drawing: {
    id: any;
    hasStudentDrawing: boolean;
  };
};

export const NodeAttrsRuntime: Record<string, boolean> = {
  paragraph: true,
  multipleChoiceItemParagraph: true,
  shortAnswerItemParagraph: true,
  shortAnswerAlternativeItemParagraph: true,
  targetingQuiz: true,
  targetingQuizOption: true,
  blankQuiz: true,
  blankQuizV2: true,
  matchingQuiz: true,
  selectionQuiz: true,
  blockquote: true,
  codeBlock: true,
  doc: true,
  hardBreak: true,
  horizontalRule: true,
  listItem: true,
  text: true,
  heading: true,
  fileUploader: true,
  file: true,
  imageUploader: true,
  image: true,
  audio: true,
  video: true,
  math_inline: true,
  math_display: true,
  mathAnswerBlock: true,
  "chart-node": true,
  graph: true,
  multipleChoiceList: true,
  multipleChoiceWithoutGradingList: true,
  multipleChoiceItem: true,
  shortAnswerList: true,
  shortAnswerAlternativeItem: true,
  shortAnswerAlternativeList: true,
  shortAnswerItem: true,
  targetingQuizBlock: true,
  blankQuizBlock: true,
  blankQuizV2Block: true,
  matchingQuizBlock: true,
  selectionQuizBlock: true,
  essay: true,
  shortAnswerWithoutGrading: true,
  explanation: true,
  speaking: true,
  englishParagraphBlock: true,
  classEmbed: true,
  toggle: true,
  toggleSummary: true,
  toggleContent: true,
  sticky: true,
  externalEmbedded: true,
  drawing: true,
};

export type AttrsByNode<N extends keyof NodeAttrs> = NodeAttrs[N];
