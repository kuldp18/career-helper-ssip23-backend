const mongoose = require('mongoose');

const CareerSchema = new mongoose.Schema({
  // reference to the user model
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  activeLearning: {
    type: Number,
    default: 0,
  },
  activeListening: {
    type: Number,
    default: 0,
  },
  complexProblemSolving: {
    type: Number,
    default: 0,
  },
  coordination: {
    type: Number,
    default: 0,
  },
  criticalThinking: {
    type: Number,
    default: 0,
  },
  equipmentMaintenance: {
    type: Number,
    default: 0,
  },
  equipmentSelection: {
    type: Number,
    default: 0,
  },
  installation: {
    type: Number,
    default: 0,
  },
  intructing: {
    type: Number,
    default: 0,
  },
  judgmentAndDecisionMaking: {
    type: Number,
    default: 0,
  },
  learningStrategies: {
    type: Number,
    default: 0,
  },
  managementOfFinancialResources: {
    type: Number,
    default: 0,
  },
  managementOfMaterialResources: {
    type: Number,
    default: 0,
  },
  managementOfPersonnelResources: {
    type: Number,
    default: 0,
  },
  mathematics: {
    type: Number,
    default: 0,
  },
  monitoring: {
    type: Number,
    default: 0,
  },
  negotiation: {
    type: Number,
    default: 0,
  },
  operationAndControl: {
    type: Number,
    default: 0,
  },
  operationAnalysis: {
    type: Number,
    default: 0,
  },
  operationMonitoring: {
    type: Number,
    default: 0,
  },
  persuasion: {
    type: Number,
    default: 0,
  },
  programming: {
    type: Number,
    default: 0,
  },
  qualityControlAnalysis: {
    type: Number,
    default: 0,
  },
  readingComprehension: {
    type: Number,
    default: 0,
  },
  repairing: {
    type: Number,
    default: 0,
  },
  science: {
    type: Number,
    default: 0,
  },
  serviceOrientation: {
    type: Number,
    default: 0,
  },
  socialPerceptiveness: {
    type: Number,
    default: 0,
  },
  speaking: {
    type: Number,
    default: 0,
  },
  systemAnalysis: {
    type: Number,
    default: 0,
  },
  systemEvaluation: {
    type: Number,
    default: 0,
  },
  technologyDesign: {
    type: Number,
    default: 0,
  },
  timeManagement: {
    type: Number,
    default: 0,
  },
  troubleshooting: {
    type: Number,
    default: 0,
  },
  writing: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Career', CareerSchema);
