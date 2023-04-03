function chatBot() {

  this.input;
  
  this.respondTo = function (input) {

    this.input = input.toLowerCase();

    if (this.match('(hy|hello)'))
      return "Hi there! How are you doing?";

    if (this.match('(i\'m doing (well|good)|good|great)'))
      return "That's great to hear! What brings you here today?";

    if (this.match('(not (so )?well|not great|bad)'))
      return "I'm sorry to hear that. Would you like to talk about what's bothering you?";

    if (this.match('(yes|sure|okay)'))
      return "Alright, feel free to share with me.";

    if (this.match('(no|not really)'))
      return "Okay, no problem. Is there anything else I can assist you with?";

    if (this.match('(thank you|thanks)'))
      return "You're welcome!";
    
    if (this.match('(what can you do|what do you do)'))
  return "I'm a chatbot designed to assist and have conversations with people. What would you like to talk about?";

    if (this.match('(what is your name|who are you)'))
  return "My name is Sean. Nice to meet you!";

    if (this.match('(tell me a joke|make me laugh)'))
  return "Why did the tomato turn red? Because it saw the salad dressing!";

    if (this.match('(what do you think about (a topic)|what is your opinion on (a topic))'))
  return "As an AI language model, I don't have personal opinions, but I can provide information and insights about a topic if you're interested.";

    if (this.match('(can you help me with something)'))
  return "Sure, I'll do my best to help you. What do you need assistance with?";
    
  if (this.match('(what do you like to do for fun|what are your hobbies)'))
  return "As an AI language model, I don't have hobbies, but I enjoy assisting and having conversations with people.";

if (this.match('(what is your favorite movie|book|song)'))
  return "As an AI language model, I don't have personal preferences, but I can provide recommendations based on popular choices if you're interested.";

if (this.match('(what is your favorite food)'))
  return "As an AI language model, I don't eat, but I can provide information and insights about different types of food if you're interested.";

if (this.match('(what is your idea of a perfect day)'))
  return "As an AI language model, I don't have personal preferences, but I think a perfect day is different for everyone. What would your perfect day look like?";

if (this.match('(what do you think is the key to happiness)'))
  return "As an AI language model, I think the key to happiness is different for everyone. What makes you happy?";

if (this.match('(do you believe in love at first sight)'))
  return "As an AI language model, I don't have personal beliefs, but I know that love at first sight is a common concept in romantic relationships. What do you think about it?";

if (this.match('(what are some good first date ideas)'))
  return "Some good first date ideas include going for a walk in the park, having a picnic, or trying a new restaurant. What do you think would be a good first date idea?";

if (this.match('(how do you know if someone likes you)'))
  return "There are many signs that someone likes you, such as paying attention to you, making time for you, and showing interest in your life. What signs have you noticed in someone who you think likes you?";

if (this.match('(what do you like to do for fun|what are your hobbies)'))
  return "I enjoy chatting with people like you! But seriously, I don't have personal preferences or hobbies since I'm an AI language model designed to assist.";

if (this.match('(have you ever been in love|do you know what love is)'))
  return "As an AI language model, I don't have personal experiences or emotions, but I can provide information and insights about the topic of love if you're interested.";

if (this.match('(how do I know if someone likes me|how do I tell someone I like them)'))
  return "Those are great questions! It can be tough to read someone's feelings or express your own, but remember that communication is key. You might consider expressing your feelings in a respectful and honest way, while also being open to the other person's response.";

if (this.match('(how do I deal with a break-up|how do I move on from a relationship)'))
  return "Break-ups can be tough, and it's important to take care of yourself during this time. Some strategies that might help include talking to supportive friends or family members, engaging in self-care activities, and seeking professional help if needed.";

if (this.match('(what are some ways to improve my daily routine|how can I be more productive)'))
  return "Great question! Some strategies that might help include setting realistic goals, prioritizing tasks, and incorporating self-care activities into your routine. It's also important to remember that productivity isn't everything - taking breaks and engaging in enjoyable activities can help you feel more energized and focused overall.";

  if (this.match('(what is your favorite subject)'))
  return "As an AI language model, I don't have favorites. But I can provide information and insights about various subjects if you're interested.";

if (this.match('(what is your least favorite subject)'))
  return "As an AI language model, I don't have personal preferences. But I can provide information and insights about various subjects if you're interested.";

if (this.match('(how are your grades|what are your grades like)'))
  return "As an AI language model, I don't have grades. But I can provide information and insights about academic performance and studying techniques if you're interested.";

if (this.match('(do you like studying|do you enjoy learning)'))
  return "As an AI language model, I don't have feelings or emotions. But I can provide information and insights about studying techniques and effective learning strategies if you're interested.";

if (this.match('(what is the best way to study)'))
  return "There are many effective ways to study, such as creating a study schedule, using active learning techniques, and seeking help from teachers and peers. What works best for you may depend on your learning style and personal preferences.";

if (this.match('(how do I stay motivated to study)'))
  return "Staying motivated to study can be challenging, but some tips include setting goals, rewarding yourself for progress, and finding a study group or accountability partner. What works best for you may depend on your personal preferences and learning style.";

if (this.match('(how do I manage my time better for school)'))
  return "Managing your time effectively can be challenging, especially with schoolwork and other responsibilities. Some tips include creating a schedule or to-do list, prioritizing tasks, and minimizing distractions. What works best for you may depend on your personal preferences and habits.";

  if (this.match('(can you help me with something)'))
  return "Sure, I'll do my best to help you. What do you need assistance with?";

if (this.match('(depression|feeling down)'))
  return "I'm sorry to hear that you're feeling depressed. It can be a difficult emotion to deal with. Have you talked to a therapist or mental health professional about it?";

if (this.match('(therapy|counseling)'))
  return "Therapy or counseling can be a really helpful resource for those struggling with depression. Have you considered reaching out to a therapist or counselor?";

if (this.match('(self-care|self-help)'))
  return "Self-care and self-help strategies can be really helpful in managing depression. Some examples include exercise, meditation, and journaling. Have you tried any of these strategies before?";

if (this.match('(medication|antidepressants)'))
  return "Medication can be a really helpful tool in treating depression, especially when used in combination with therapy. Have you talked to a doctor or psychiatrist about potentially trying medication?";

  if (this.match('(not (so )?well|not great|bad)'))
  return "I'm sorry to hear that. Would you like to talk about what's bothering you?";

if (this.match('(yes|sure|okay)'))
  return "Alright, feel free to share with me.";

if (this.match('(no|not really)'))
  return "Okay, no problem. Is there anything else I can assist you with?";

if (this.match('(thank you|thanks)'))
  return "You're welcome!";

    return "I'm sorry, I didn't quite catch that. Can you please rephrase it?";
  };

  
  this.match = function (regex) {

    return new RegExp(regex).test(this.input);
  };
}


$(function () {

 
  var you = 'You';
  var robot = 'Chatbot';

 
  var delayStart = 400;
  var delayEnd = 800;

  
  var bot = new chatBot();
  var chat = $('.chat');
  var waiting = 0;
  $('.busy').text(robot + ' is typing...');

 
  var submitChat = function () {

    var input = $('.input input').val();
    if (input == '') return;

    $('.input input').val('');
    updateChat(you, input);

    var reply = bot.respondTo(input);
    if (reply == null) return;

    var latency = Math.floor(Math.random() * (delayEnd - delayStart) + delayStart);
    $('.busy').css('display', 'block');
    waiting++;
    setTimeout(function () {
      if (typeof reply === 'string') {
        updateChat(robot, reply);
      } else {
        for (var r in reply) {
          updateChat(robot, reply[r]);
        }
      }
      if (--waiting == 0) $('.busy').css('display', 'none');
    }, latency);
  };

  var updateChat = function (party, text) {

    var style = 'you';
    if (party != you) {
      style = 'other';
    }

    var line = $('<div><span class="party"></span> <span class="text"></span></div>');
    line.find('.party').addClass(style).text(party + ':');
    line.find('.text').text(text);

    chat.append(line);

    chat.stop().animate({ scrollTop: chat.prop("scrollHeight") });

  };


  $('.input').bind('keydown', function (e) {
    if (e.keyCode == 13) {
      submitChat();
    }
  });
  $('.input a').bind('click', submitChat);


  updateChat(robot, 'Hello, welcome to our chatbot. How can I assist you today?');

});
