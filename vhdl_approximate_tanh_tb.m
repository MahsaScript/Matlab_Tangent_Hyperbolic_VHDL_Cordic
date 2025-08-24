function vhdl_approximate_tanh_tb
  % Test inputs
  x_8  = fi(-5:0.08:5,1,8);
  x_16 = fi(-5:0.08:5,1,16);
  x_32 = fi(-5:0.08:5,1,32);
  y = tanh( double(x_8) );
figure;
iteration = [5,15,25];
 for i = 1:length(iteration)
     for niters = iteration(i)
        y_cordic_8 = vhdl_approximate_tanh_design( double( x_8)); 
        %  y_cordic_16 = vhdl_approximate_tanh_design( double( x_16));   % 16 bits
        %  y_cordic_32 = vhdl_approximate_tanh_design( double( x_32));   % 32 bits
        plot(x_8, y_cordic_8);
        grid on;
        hold on;
     end
 end
  error8_ = RMSE(y_cordic_8,y);
  formatSpec = '%.20f';
  error8_=num2str(error8_,formatSpec);
  disp("error 8 bits:" + error8_);
  
xlabel('theta');
ylabel('tanh(theta)');
title("tanh(x)& Cordic - 8 bits aproximation Error = " + error8_);

legend('5 iterations', '15 iterations', '25 iterations','Location','southeast');
grid on;

 
  figure;
  err = abs(y - double(y_cordic_8));
  plot(x_8, err);
  xlabel('theta');
  ylabel('error');
  title("tanh(x)& Cordic - 8 bits aproximation Error = " + error8_);
  grid on;

% figure;
% err = abs(tanh(x) - double(T_cordic));
% plot(x, err);
% xlabel('theta');
% ylabel('error');
% error = RMSE(tanh(x),T_cordic);
% formatSpec = '%.10f';
% error_=num2str(error,formatSpec);
% disp(num2str(error,formatSpec));
% title("tanh(x)& cordic aproximation Error = " + error_);
% xlabel('x');
% ylabel('tanh(x)');


end
