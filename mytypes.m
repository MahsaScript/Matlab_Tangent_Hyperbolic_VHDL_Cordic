function T = mytypes(dt)
  switch dt
    case 'double'
      T.x = double([]);

    case 'fixed8'
      T.x = fi([],true,14,13);  % 14 bits

    case 'fixed16'
      T.x = fi([],true,16,15);  % 16 bits
      
    case 'fixed21'
      T.x = fi([],true,21,20);  % 21 bits
  end
end