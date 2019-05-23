let member = [];
member = []
for(var i=1;i<316;i++){
  if(i.toString()[i.toString().length-1]!=='4' && i.toString()[i.toString().length-2]!=='4') //剔除个位及十位数含4的数字
  member.push({"phone":"号",'name':i})
}
