interface Variables {
  num: number;
  name:string;
  
}

function tsTest({ num }: Variables) {
  num = 5;
}
