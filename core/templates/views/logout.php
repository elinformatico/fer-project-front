<?php
	# Close session
	if(isSessionActive()) {
		closeSession();
		header("Location: login");
	}
