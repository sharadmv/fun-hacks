all: arduino
default: arduino

.PHONY: all arduino clean

arduino:
	make -C arduino/ upload

clean:
	ls
