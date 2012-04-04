var I18n = I18n || {};
I18n.translations = {"en":{"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M","note_date":"%b %d, %Y"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match confirmation","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)","not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","odd":"must be odd","even":"must be even","expired":"has expired, please request a new one","not_found":"not found","already_confirmed":"was already confirmed","not_locked":"was not locked","not_saved":{"one":"1 error prohibited this %{resource} from being saved:","other":"%{count} errors prohibited this %{resource} from being saved:"}}},"activerecord":{"errors":{"messages":{"taken":"has already been taken","record_invalid":"Validation failed: %{errors}"}},"models":{"user":"Member","story":"Story","project":"Project","note":"Note"},"attributes":{"project":{"name":"Name","point_scale":"Point Scale","default_velocity":"Default Velocity","start_date":"Start Date","iteration_start_day":"Iteration Start Day","iteration_length":"Iteration Length"},"user":{"email":"Email","name":"Name","initials":"Initials","password":"Password","password_confirmation":"Password Confirmation"}}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":""}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"},"button":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"}},"devise":{"failure":{"already_authenticated":"You are already signed in.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your account before continuing.","locked":"Your account is locked.","invalid":"Invalid email or password.","invalid_token":"Invalid authentication token.","timeout":"Your session expired, please sign in again to continue.","inactive":"Your account was not activated yet."},"sessions":{"signed_in":"Signed in successfully.","signed_out":"Signed out successfully."},"passwords":{"send_instructions":"You will receive an email with instructions about how to reset your password in a few minutes.","updated":"Your password was changed successfully. You are now signed in.","updated_not_active":"Your password was changed successfully.","send_paranoid_instructions":"If your e-mail exists on our database, you will receive a password recovery link on your e-mail"},"confirmations":{"send_instructions":"You will receive an email with instructions about how to confirm your account in a few minutes.","send_paranoid_instructions":"If your e-mail exists on our database, you will receive an email with instructions about how to confirm your account in a few minutes.","confirmed":"Your account was successfully confirmed. Please set a password to complete the sign up process.","invalid_token":"Invalid confirmation token."},"registrations":{"signed_up":"You have signed up successfully. If enabled, a confirmation was sent to your e-mail.","signed_up_but_unconfirmed":"You have signed up successfully. A confirmation was sent to your e-mail. Please follow the contained instructions to activate your account.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","updated":"You updated your account successfully.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.","destroyed":"Bye! Your account was successfully cancelled. We hope to see you again soon."},"unlocks":{"send_instructions":"You will receive an email with instructions about how to unlock your account in a few minutes.","unlocked":"Your account was successfully unlocked. You are now signed in.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions about how to unlock it in a few minutes."},"omniauth_callbacks":{"success":"Successfully authorized from %{kind} account.","failure":"Could not authorize you from %{kind} because \"%{reason}\"."},"mailer":{"confirmation_instructions":{"subject":"Confirmation instructions"},"reset_password_instructions":{"subject":"Reset password instructions"},"unlock_instructions":{"subject":"Unlock Instructions"}}},"fulcrum":"Fulcrum","author unknown":"Author Unknown","no_estimate":"No estimate","words":{"requested":"Requested","by":"by","_on":"on","week":"week"},"transitions":{"start":"start","finish":"finish","deliver":"deliver","accept":"accept","reject":"reject","restart":"restart"},"point_scale":{"fibonacci":"Fibonacci","powers_of_two":"Powers of Two","linear":"Linear"},"story_state":{"unscheduled":"Unscheduled","unstarted":"Unstarted","started":"Started","finished":"Finished","delivered":"Delivered","accepted":"Accepted","rejected":"Rejected"},"story_type":{"feature":"Feature","chore":"Chore","bug":"Bug","release":"Release"},"fields":{"notes":"Notes","description":"Description","labels":"Labels","estimate":"Estimate","owned_by":"Owned by","requested_by":"Requested by","state":"State","story_type":"Type","story_title":"Title","note":"Note"},"titles":{"project_members":"Project Members","add_project_member":"Add Project Member"},"panels":{"done":"Done","in_progress":"In Progress","backlog":"Backlog","chilly_bin":"Chilly Bin"},"actions":{"log_out":"Log out","log_in":"Log in","sign_up":"Sign up","sign_in":"Sign in","save":"Save","cancel":"Cancel","edit":"Edit","delete":"Delete","remove":"Remover","back":"Back","add_user":"Add Member","add_story":"Add Story","add_note":"Add Note","import":"Import","export":"Export"},"projects":{"new project":"New Project","edit project":"Edit Project","project properties":"Project Properties","index":{"listing projects":"Listing Projects","are you sure you want to delete this project":"Are you sure you want to delete this project?  This action cannot be undone.","the iteration starts on x with length of x weeks":{"one":"Iterations start on %{day} with a length of 1 week","other":"Iterations start on %{day} with a length of %{count} weeks"}}},"registrations":{"edit":{"leave_blank_if_you_dont_want_to_change_it":"Leave blank if you don't want to change it","notify_me_when_my_stories_are":"Notify me when my stories are","we_need_your_current_password_to_confirm_your_changes":"We need your current password to confirm your changes."}}},"pt-BR":{"fulcrum":"Scrum","author unknown":"Autor Desconhecido","no_estimate":"Sem estimativa","words":{"requested":"Requisitado","by":"por","_on":"em","week":"semana"},"transitions":{"start":"iniciar","finish":"finalizar","deliver":"entregar","accept":"aceitar","reject":"rejeitar","restart":"reiniciar"},"point_scale":{"fibonacci":"Fibonacci","powers_of_two":"Pot\u00eancias de Dois","linear":"Linear"},"story_state":{"unscheduled":"N\u00e3o agendada","unstarted":"N\u00e3o iniciada","started":"Iniciada","finished":"Finalizada","delivered":"Entregue","accepted":"Aceita","rejected":"Rejeitada"},"story_type":{"feature":"Funcionalidade","chore":"Tarefa","bug":"Defeito","release":"Libera\u00e7\u00e3o"},"fields":{"notes":"Coment\u00e1rios","description":"Descri\u00e7\u00e3o","labels":"R\u00f3tulos","estimate":"Estimativa","owned_by":"Respons\u00e1vel","requested_by":"Requisitante","state":"Estado","story_type":"Tipo","story_title":"T\u00edtulo","note":"Coment\u00e1rio"},"titles":{"project_members":"Membros do Projeto","add_project_member":"Adicionar Membro ao Projeto"},"panels":{"done":"Conclu\u00eddas","in_progress":"Em Andamento","backlog":"Aguardando","chilly_bin":"Congeladas"},"actions":{"log_out":"Sair","log_in":"Entrar","sign_up":"Registrar-se","sign_in":"Sign in","save":"Salvar","cancel":"Cancelar","edit":"Editar","delete":"Apagar","remove":"Remover","back":"Voltar","add_user":"Adicionar Membro","add_story":"Adicionar Hist\u00f3ria","add_note":"Adicionar Coment\u00e1rio","import":"Importar","export":"Exportar"},"projects":{"new project":"Novo Projeto","edit project":"Editar Projeto","project properties":"Propriedades do Projeto","index":{"listing projects":"Lista de Projetos","are you sure you want to delete this project":"Are you sure you want to delete this project?  This action cannot be undone.","the iteration starts on x with length of x weeks":{"one":"Itera\u00e7\u00f5es come\u00e7am %{day} com dura\u00e7\u00e3o de 1 semana","other":"Itera\u00e7\u00f5es come\u00e7am %{day} com dura\u00e7\u00e3o de %{count} semanas"}}},"registrations":{"edit":{"leave_blank_if_you_dont_want_to_change_it":"Leave blank if you don't want to change it","notify_me_when_my_stories_are":"Notify me when my stories are","we_need_your_current_password_to_confirm_your_changes":"We need your current password to confirm your changes."}},"date":{"order":["day","month","year"],"day_names":["Domingo","Segunda","Ter\u00e7a","Quarta","Quinta","Sexta","S\u00e1bado"],"month_names":[null,"Janeiro","Fevereiro","Mar\u00e7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]},"time":{"formats":{"note_date":"%d-%m-%Y"}},"activerecord":{"models":{"user":"Membro","story":"Hist\u00f3ria","project":"Projeto","note":"Coment\u00e1rio"},"attributes":{"project":{"name":"Nome","point_scale":"Escala de Pontua\u00e7\u00e3o","default_velocity":"Velocidade Padr\u00e3o","start_date":"Data Inicial","iteration_start_day":"Dia de In\u00edcio das Itera\u00e7\u00f5es","iteration_length":"Dura\u00e7\u00e3o das Itera\u00e7\u00f5es"},"user":{"email":"Email","name":"Nome","initials":"Iniciais","password":"Senha","password_confirmation":"Confirma\u00e7\u00e3o de Senha"}}}}};