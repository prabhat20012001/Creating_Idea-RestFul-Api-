const ideas=require("../models/idea.model");


// search all idea

exports.fetchAllIdeas=(req,res)=>{
    res.status(200).send(ideas);

};


let idCount=1;

// create new idea

exports.ceateIdea=(req,res)=>{
    const idea=req.body;
    idea.id=++idCount;
    ideas[idCount]=idea;
    res.status(201).send(ideas[idCount]);
};
// update idea

exports.updateIdea=(req,res)=>{
    const ideaId=req.params.id;

    if(ideas[ideaId]){
        ideas[ideaId]=req.body;
        res.status(200).send(ideas[ideaId]);
    } else{
        res.status(400).send({
            message:"idea Id passed was not correct"
        })
    }
}



// delete idea

exports.deleteIdea=(req,res)=>{
    if(ideas[req.params.id]){
        delete ideas[req.params.id];
        res.status(200).send({
            message:"successfully deleted"
        })
    }
}