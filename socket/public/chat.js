   const socket = io();

   let message = document.getElementById('message');
   let name = document.getElementById('name');
   let send = document.getElementById('send');
   let output = document.getElementById('output');
   let actions = document.getElementById('actions');

   send.addEventListener("click",()=>{
      socket.emit('chat:message',{
         name:name.value,
         message:message.value
      })
   })

   message.addEventListener('keydown',()=>{
      console.log(name.value+" is typing");
      socket.emit('chat:typing',name.value);
   });

   socket.on('chat:response',(data)=>{
      output.innerHTML += `<p><strong>${data.name}</strong>: ${data.message}
      </p>`
   });

   socket.on('chat:typing',(data)=>{
      console.log("success");
      actions.innerHTML = `<p><em>${data} is typing</em> `
   });