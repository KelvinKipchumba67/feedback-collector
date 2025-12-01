import Feedback from "../models/feedback.js";//Feedback is now the interface to the MongoDb collection. When I call a method like .find() mongoose translates it a MongoDb command like db.feedbacks.find())

export const getFeedbacks = async (req, res) => { 
  const feedbacks = await Feedback.find().sort({ createdAt: -1 });
  res.json(feedbacks);
};//export const makes  the function available to be imported  by another file
//async is important because it tells js that this function is going to take a while to finish because it relies on an external system that is the db therefore allow other code to run while this func waits

//req and res are objects provided by Express. Req refering to request it contains info about what the user sent you (headers,params,data). Res refering to response is the toolkit you use to send data back to the user

//await purses the execution of the function strictly until the external system that is the db replies
//Feedback.find(): queries the db for all documents in this collection 
//.sort ({createdAt: -1}): is a modifier  1)Ascending order -1)Descending order that is newest to oldest.

//res.json does two things one is it sets the http header Content-type to application/json, the other is it converts the js array of objects into a json string to send over the network.

export const createFeedback = async (req, res) => {
  const { name, message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });//this is a flow control pattern called the Guard Clause.It stops the function immediately so the code below doen't run
  //!message means if message is null/undefined/empty
  if(!name) return res.status(400).json({error: "Name is required "});
  //i added this flow control to make sure the user enters the name. if assigns name as anonymous.
  const newFeedback = await Feedback.create({ name, message });//this instantiates the new document and calls .save() in one go.
  res.status(201).json(newFeedback);
};

export const deleteFeedback = async (req, res) => {
  await Feedback.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

export const markResolved = async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);
  if (!feedback) return res.status(404).json({ error: "Not found" });

  feedback.resolved = true;
  await feedback.save();
  res.json(feedback);
};
