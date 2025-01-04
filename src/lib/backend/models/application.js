import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  }, 
  email: {
    type: String,
    required: true
  },
  portfolioURL: {
    type: String,
    required: true,
  },
  coverLetter: {
    type: String
  },
  jobTitle : {
    type: String,
    required: true,
  },
  jobSubTitle : {
    type: String,
    required: true,
  },
  jobType : {
    type: String,
    required: true,
  },
  jobCategory : {
    type: String,
    required: true,
  },
  jobExperience : {
    type: String,
    required: true,
  },
  jobDegree : {
    type: String,
    required: true,
  },
  jobOfferedSalary : {
    type: String,
    required: true,
  },
  jobLocation : {
    type: String,
    required: true,
  },
  jobDescription : {
    type: String,
    required: true,
  },
  jobKeyResponsibilities : {
    type: String,
    required: true,
  },
  jobProfessionalSkills : {
    type: String,
    required: true,
  },
  jobCompanyName : {
    type: String,
    required: true,
  },
  rhEmail : {
    type: String,
    required: true,
  },
  status : {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default : "pending",
  } ,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Application || mongoose.model('Application', ApplicationSchema);