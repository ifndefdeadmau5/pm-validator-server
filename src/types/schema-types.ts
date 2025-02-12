export type NodeAttrs = {
  paragraph: {
    id: any;
    indent: number;
    textAlign: undefined;
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
    textAlign: undefined;
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
    textAlign: undefined;
    options: any[];
    index: number;
    init: boolean;
    singleOption: boolean;
    studentAnswer: any;
  };
  blankQuizV2: {
    id: any;
    textAlign: undefined;
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
    textAlign: undefined;
    options: any[];
    index: number;
    init: boolean;
    singleOption: boolean;
  };
  selectionQuiz: {
    id: any;
    textAlign: undefined;
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
  inlineImage: {
    id: any;
    src: any;
    alt: string;
    title: any;
    width: any;
    height: any;
    ratio: number;
    script: any;
    file: any;
  };
  heading: {
    id: any;
    "data-toc-id": any;
    textAlign: undefined;
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
    blockStyle: string;
  };
  image: {
    id: any;
    src: any;
    alt: any;
    title: any;
    "data-uploaded": boolean;
    width: undefined;
    height: undefined;
    maxWidth: number;
    alignment: string;
    script: any;
    imagePreview: boolean;
    file: any;
  };
  columns: {
    id: any;
  };
  column: {
    id: any;
    width: number;
  };
  audio: {
    id: any;
    audioSrc: any;
    duration: any;
    subtitleFileIds: any;
    subtitleFiles: any;
    blockStyle: string;
  };
  video: {
    id: any;
    parentNodeId: any;
    src: any;
    duration: any;
    subtitleFileIds: any;
    subtitleFiles: any[];
    watchTime: any;
    playedPercent: any;
    status: any;
    blockStyle: string;
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
    blockStyle: string;
  };
  graph: {
    id: any;
    mode: any;
    studentAnswers: any;
    answerBlockAnswerResult: any;
    graphData: any;
    blockStyle: string;
    parseHTML: any;
    renderHTML: any;
  };
  multipleChoiceList: {
    id: any;
    listItemStyle: string;
    checkPolicy: string;
    blockStyle: string;
  };
  multipleChoiceWithoutGradingList: {
    id: any;
    listItemStyle: string;
    enableSingleSelect: boolean;
    hideHelpText: boolean;
    blockStyle: string;
    couldBeManuallyGraded: boolean;
  };
  multipleChoiceItem: {
    id: any;
    checked: boolean;
    studentChecked: undefined;
    isGrading: boolean;
  };
  shortAnswerList: {
    id: any;
    listItemStyle: string;
    educationLevel: string;
    isAnswerCountHidden: boolean;
    isAnswersJudgedInAnyOrder: boolean;
    isIgnoreSpacing: boolean;
    isReadyToSubmit: boolean;
    studentAnswers: any;
    studentAnswerTypes: any;
    blockStyle: string;
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
    textAlign: undefined;
    checkPolicy: any;
    solution: any;
    studentAnswers: any;
    blockStyle: string;
  };
  blankQuizBlock: {
    id: any;
    textAlign: undefined;
    hintOption: any;
    studentAnswers: any;
    solution: any;
    blockStyle: string;
  };
  blankQuizV2Block: {
    id: any;
    textAlign: undefined;
    hintOption: any;
    blankStyle: any;
    isIgnoreSpacing: boolean;
    studentAnswers: any;
    solution: any;
    educationLevel: any;
    blockStyle: string;
    orderlessBundles: any[];
    orderlessIndexes: any[];
  };
  matchingQuizBlock: {
    id: any;
    textAlign: undefined;
    hintOption: any;
    studentAnswers: any;
    blockStyle: string;
    solution: boolean;
    isAnswerRandomlyPlaced: boolean;
  };
  selectionQuizBlock: {
    id: any;
    textAlign: undefined;
    shuffleOption: any;
    proofReading: any;
    solution: any;
    incomplete: any;
    blockStyle: string;
  };
  essay: {
    id: any;
    textAlign: undefined;
    studentAnswer: any;
    enableEmptyStudentAnswer: boolean;
    hideHelpText: boolean;
    blockStyle: string;
  };
  shortAnswerWithoutGrading: {
    id: any;
    textAlign: undefined;
    studentAnswer: any;
    enableEmptyStudentAnswer: boolean;
    hideHelpText: boolean;
    blockStyle: string;
    couldBeManuallyGraded: boolean;
  };
  explanation: {
    id: any;
    blockStyle: string;
  };
  speaking: {
    id: any;
    sttId: any;
    sttResult: any;
    src: any;
    enableTranscription: any;
    maxRecordTime: any;
    blockStyle: string;
    couldBeManuallyGraded: boolean;
    status: any;
  };
  englishParagraphBlock: {
    id: any;
    parentNodeId: any;
    src: any;
    previousTextContent: any;
    blockStyle: string;
  };
  classEmbed: {
    id: any;
    blockStyle: string;
    couldBeManuallyGraded: boolean;
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
    linkSrc: string;
    customActivityId: string;
    mode: undefined;
    learningActivityId: undefined;
    fileId: string;
    algeoMathStudentAnswerUrl: any;
    isInStudySyncScreen: undefined;
    blockStyle: string;
    couldBeManuallyGraded: boolean;
  };
  drawing: {
    id: any;
    hasStudentDrawing: boolean;
    blockStyle: string;
    couldBeManuallyGraded: boolean;
  };
  lineMatching: {
    id: any;
    edges: any[];
    studentEdges: any[];
    solution: boolean;
    isCorrect: boolean;
    blockStyle: string;
  };
  lineMatchingItemContainer: {
    id: any;
    listItemStyle: string;
  };
  lineMatchingItem: {
    id: any;
    selected: boolean;
    studentSelected: boolean;
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
  inlineImage: true,
  heading: true,
  fileUploader: true,
  file: true,
  image: true,
  columns: true,
  column: true,
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
  lineMatching: true,
  lineMatchingItemContainer: true,
  lineMatchingItem: true,
};

export type AttrsByNode<N extends keyof NodeAttrs> = NodeAttrs[N];
