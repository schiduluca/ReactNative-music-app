//
//  LocalStorage.h
//  MusicApp
//
//  Created by Luca SCHIDU on 2/24/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface LocalStorage : NSObject <RCTBridgeModule> {
  NSFileManager *fileMgr;
  NSString *homeDir;
  NSString *filename;
  NSString *filepath;
}

@property(nonatomic,retain) NSFileManager *fileMgr;
@property(nonatomic,retain) NSString *homeDir;
@property(nonatomic,retain) NSString *filename;
@property(nonatomic,retain) NSString *filepath;

-(NSString *) GetDocumentDirectory;
-(NSString *) setFilename;


@end
